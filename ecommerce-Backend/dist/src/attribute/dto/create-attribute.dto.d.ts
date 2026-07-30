import { CreateAttributeValueDto } from './create-attribute-value.dto';
export declare enum AttributeType {
    DROPDOWN = "dropdown",
    RADIO = "radio",
    CHECKBOX = "checkbox",
    COLOUR_SWATCH = "colour_swatch",
    IMAGE_SWATCH = "image_swatch"
}
export declare class CreateAttributeDto {
    name: string;
    slug: string;
    type: AttributeType;
    values?: CreateAttributeValueDto[];
}
