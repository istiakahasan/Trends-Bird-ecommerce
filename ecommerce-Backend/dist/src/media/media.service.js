"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const sharp = require('sharp');
const { fileTypeFromBuffer } = require('file-type');
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = {
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
function ensureDirectories() {
    if (!fs.existsSync(UPLOADS_DIR))
        fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    if (!fs.existsSync(THUMBS_SUBDIR))
        fs.mkdirSync(THUMBS_SUBDIR, { recursive: true });
}
function uuid() {
    return crypto.randomUUID();
}
let MediaService = class MediaService {
    constructor(prisma) {
        this.prisma = prisma;
        ensureDirectories();
    }
    async processSingleFile(file, userId) {
        if (file.size > MAX_FILE_SIZE) {
            throw new common_1.BadRequestException(`File "${file.originalname}" exceeds the 10 MB maximum`);
        }
        const detected = await fileTypeFromBuffer(file.buffer);
        const mimeType = detected?.mime ?? null;
        const effectiveMime = mimeType ?? (file.mimetype === 'image/svg+xml' ? 'image/svg+xml' : null);
        if (!effectiveMime || !ALLOWED_MIME_TYPES[effectiveMime]) {
            throw new common_1.UnprocessableEntityException(`File "${file.originalname}" has a disallowed type (${effectiveMime ?? 'unknown'})`);
        }
        const mediaType = ALLOWED_MIME_TYPES[effectiveMime];
        const ext = path.extname(file.originalname).toLowerCase() || `.${detected?.ext ?? 'bin'}`;
        const storedName = `${uuid()}${ext}`;
        const filePath = path.join(UPLOADS_DIR, storedName);
        fs.writeFileSync(filePath, file.buffer);
        let width;
        let height;
        let thumbnailUrl;
        if (mediaType === 'image' && effectiveMime !== 'image/svg+xml') {
            try {
                const img = sharp(file.buffer);
                const meta = await img.metadata();
                width = meta.width;
                height = meta.height;
                const thumbName = `thumb_${uuid()}.webp`;
                const thumbPath = path.join(THUMBS_SUBDIR, thumbName);
                await img
                    .resize(300, 300, { fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(thumbPath);
                thumbnailUrl = `${BASE_URL}/uploads/thumbnails/${thumbName}`;
            }
            catch {
            }
        }
        const url = `${BASE_URL}/uploads/${storedName}`;
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
    async uploadFiles(files, userId) {
        if (!files || files.length === 0) {
            throw new common_1.BadRequestException('No files provided');
        }
        const results = await Promise.all(files.map((f) => this.processSingleFile(f, userId)));
        return { data: results };
    }
    async findAll(query) {
        const page = Math.max(1, query.page ?? 1);
        const limit = Math.min(100, Math.max(1, query.limit ?? 10));
        const skip = (page - 1) * limit;
        const where = {};
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
    async findOne(id) {
        const media = await this.prisma.media.findUnique({
            where: { id },
            include: {
                uploadedBy: { select: { id: true, name: true, email: true } },
                products: { select: { id: true, name: true } },
            },
        });
        if (!media)
            throw new common_1.NotFoundException('Media asset not found');
        return { data: media };
    }
    async update(id, dto) {
        const media = await this.prisma.media.findUnique({ where: { id } });
        if (!media)
            throw new common_1.NotFoundException('Media asset not found');
        const updated = await this.prisma.media.update({
            where: { id },
            data: {
                ...(dto.altText !== undefined && { altText: dto.altText }),
                ...(dto.title !== undefined && { title: dto.title }),
            },
        });
        return { data: updated };
    }
    async remove(id) {
        const media = await this.prisma.media.findUnique({
            where: { id },
            include: { products: { select: { id: true } } },
        });
        if (!media)
            throw new common_1.NotFoundException('Media asset not found');
        if (media.products.length > 0) {
            await this.prisma.media.update({
                where: { id },
                data: {
                    products: { set: [] },
                },
            });
        }
        await this.prisma.media.delete({ where: { id } });
        this.deleteFileFromDisk(media.path);
        if (media.thumbnailUrl) {
            const thumbRelative = media.thumbnailUrl.replace(`${BASE_URL}/uploads/`, '');
            const thumbPath = path.join(UPLOADS_DIR, thumbRelative);
            this.deleteFileFromDisk(thumbPath);
        }
        return { data: { success: true, detachedFrom: media.products.length } };
    }
    deleteFileFromDisk(filePath) {
        try {
            if (fs.existsSync(filePath))
                fs.unlinkSync(filePath);
        }
        catch {
            console.error(`Failed to delete file at ${filePath}`);
        }
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MediaService);
//# sourceMappingURL=media.service.js.map