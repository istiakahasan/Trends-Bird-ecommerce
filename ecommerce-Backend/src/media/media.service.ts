import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaQueryDto } from './dto/media-query.dto';
import * as path from 'path';
import * as fs from 'fs';
import * as crypto from 'crypto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharp = require('sharp');
// file-type@16 is CJS — import via require to avoid ESM issues
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fileTypeFromBuffer } = require('file-type');

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_MIME_TYPES: Record<string, string> = {
  'image/jpeg': 'image',
  'image/png': 'image',
  'image/gif': 'image',
  'image/webp': 'image',
  'image/svg+xml': 'image',
  'video/mp4': 'video',
  'video/webm': 'video',
  'application/pdf': 'document',
};

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');
const THUMBS_SUBDIR = path.join(UPLOADS_DIR, 'thumbnails');
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ensureDirectories() {
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  if (!fs.existsSync(THUMBS_SUBDIR)) fs.mkdirSync(THUMBS_SUBDIR, { recursive: true });
}

function uuid(): string {
  return crypto.randomUUID();
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {
    ensureDirectories();
  }

  /**
   * Validate a single file buffer, write it to disk, generate thumbnail if image,
   * and create the DB record. Returns the created Media record.
   */
  async processSingleFile(file: Express.Multer.File, userId: number) {
    // 1. Size check
    if (file.size > MAX_FILE_SIZE) {
      throw new BadRequestException(
        `File "${file.originalname}" exceeds the 10 MB maximum`,
      );
    }

    // 2. Real MIME detection from magic bytes — do NOT trust file.mimetype
    const detected = await fileTypeFromBuffer(file.buffer);
    const mimeType = detected?.mime ?? null;

    // SVG is plain XML so file-type won't detect it; fall back to client header only
    // for SVG when the magic-byte detection is inconclusive.
    const effectiveMime =
      mimeType ?? (file.mimetype === 'image/svg+xml' ? 'image/svg+xml' : null);

    if (!effectiveMime || !ALLOWED_MIME_TYPES[effectiveMime]) {
      throw new UnprocessableEntityException(
        `File "${file.originalname}" has a disallowed type (${effectiveMime ?? 'unknown'})`,
      );
    }

    const mediaType = ALLOWED_MIME_TYPES[effectiveMime]; // "image" | "video" | "document"
    const ext = path.extname(file.originalname).toLowerCase() || `.${detected?.ext ?? 'bin'}`;
    const storedName = `${uuid()}${ext}`;
    const filePath = path.join(UPLOADS_DIR, storedName);

    // 3. Write the file to disk
    fs.writeFileSync(filePath, file.buffer);

    // 4. Gather image metadata (dimensions) and generate thumbnail
    let width: number | undefined;
    let height: number | undefined;
    let thumbnailUrl: string | undefined;

    if (mediaType === 'image' && effectiveMime !== 'image/svg+xml') {
      try {
        const img = sharp(file.buffer);
        const meta = await img.metadata();
        width = meta.width;
        height = meta.height;

        // Thumbnail: 300×300 fit:inside, saved as WebP
        const thumbName = `thumb_${uuid()}.webp`;
        const thumbPath = path.join(THUMBS_SUBDIR, thumbName);
        await img
          .resize(300, 300, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(thumbPath);

        thumbnailUrl = `${BASE_URL}/uploads/thumbnails/${thumbName}`;
      } catch {
        // Non-fatal — proceed without thumbnail if sharp fails
      }
    }

    const url = `${BASE_URL}/uploads/${storedName}`;

    // 5. Create DB record
    const media = await this.prisma.media.create({
      data: {
        fileName: file.originalname,
        storedName,
        path: filePath,
        url,
        thumbnailUrl,
        mimeType: effectiveMime,
        type: mediaType,
        size: file.size,
        width,
        height,
        uploadedById: userId,
      },
      include: {
        uploadedBy: { select: { id: true, name: true, email: true } },
      },
    });

    return media;
  }

  async uploadFiles(files: Express.Multer.File[], userId: number) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files provided');
    }
    const results = await Promise.all(
      files.map((f) => this.processSingleFile(f, userId)),
    );
    return { data: results };
  }

  async findAll(query: MediaQueryDto) {
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(100, Math.max(1, query.limit ?? 10));
    const skip = (page - 1) * limit;

    const where: any = {};

    if (query.search) {
      where.OR = [
        { fileName: { contains: query.search, mode: 'insensitive' } },
        { title: { contains: query.search, mode: 'insensitive' } },
        { altText: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    if (query.type) {
      where.type = query.type;
    }

    const [items, total] = await Promise.all([
      this.prisma.media.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          uploadedBy: { select: { id: true, name: true, email: true } },
        },
      }),
      this.prisma.media.count({ where }),
    ]);

    return {
      data: items,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const media = await this.prisma.media.findUnique({
      where: { id },
      include: {
        uploadedBy: { select: { id: true, name: true, email: true } },
        products: { select: { id: true, name: true } },
      },
    });
    if (!media) throw new NotFoundException('Media asset not found');
    return { data: media };
  }

  async update(id: number, dto: UpdateMediaDto) {
    const media = await this.prisma.media.findUnique({ where: { id } });
    if (!media) throw new NotFoundException('Media asset not found');

    const updated = await this.prisma.media.update({
      where: { id },
      data: {
        ...(dto.altText !== undefined && { altText: dto.altText }),
        ...(dto.title !== undefined && { title: dto.title }),
      },
    });
    return { data: updated };
  }

  async remove(id: number) {
    const media = await this.prisma.media.findUnique({
      where: { id },
      include: { products: { select: { id: true } } },
    });
    if (!media) throw new NotFoundException('Media asset not found');

    // Detach from all products (removes join table rows cleanly)
    if (media.products.length > 0) {
      await this.prisma.media.update({
        where: { id },
        data: {
          products: { set: [] },
        },
      });
    }

    // Delete DB record
    await this.prisma.media.delete({ where: { id } });

    // Delete files from disk (non-fatal if already gone)
    this.deleteFileFromDisk(media.path);
    if (media.thumbnailUrl) {
      // Derive thumbnail path from URL
      const thumbRelative = media.thumbnailUrl.replace(`${BASE_URL}/uploads/`, '');
      const thumbPath = path.join(UPLOADS_DIR, thumbRelative);
      this.deleteFileFromDisk(thumbPath);
    }

    return { data: { success: true, detachedFrom: media.products.length } };
  }

  private deleteFileFromDisk(filePath: string) {
    try {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch {
      // Log but do not throw — DB record is already gone, failing here isn't recoverable
      console.error(`Failed to delete file at ${filePath}`);
    }
  }
}
