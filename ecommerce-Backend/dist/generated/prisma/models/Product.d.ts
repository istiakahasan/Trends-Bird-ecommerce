import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    categoryId: number | null;
};
export type ProductSumAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    categoryId: number | null;
};
export type ProductMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    brandId: number | null;
    categoryId: number | null;
};
export type ProductMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    brandId: number | null;
    categoryId: number | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    brandId: number;
    categoryId: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    id?: true;
    brandId?: true;
    categoryId?: true;
};
export type ProductSumAggregateInputType = {
    id?: true;
    brandId?: true;
    categoryId?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    brandId?: true;
    categoryId?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    brandId?: true;
    categoryId?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    brandId?: true;
    categoryId?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    brandId: number | null;
    categoryId: number | null;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brandId?: Prisma.IntNullableFilter<"Product"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Product"> | number | null;
    brand?: Prisma.XOR<Prisma.BrandNullableScalarRelationFilter, Prisma.BrandWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    media?: Prisma.MediaListRelationFilter;
    variants?: Prisma.ProductVariantListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    brandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.BrandOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    media?: Prisma.MediaOrderByRelationAggregateInput;
    variants?: Prisma.ProductVariantOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brandId?: Prisma.IntNullableFilter<"Product"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Product"> | number | null;
    brand?: Prisma.XOR<Prisma.BrandNullableScalarRelationFilter, Prisma.BrandWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    media?: Prisma.MediaListRelationFilter;
    variants?: Prisma.ProductVariantListRelationFilter;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    brandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    brandId?: Prisma.IntNullableWithAggregatesFilter<"Product"> | number | null;
    categoryId?: Prisma.IntNullableWithAggregatesFilter<"Product"> | number | null;
};
export type ProductCreateInput = {
    name: string;
    description?: string | null;
    brand?: Prisma.BrandCreateNestedOneWithoutProductsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    media?: Prisma.MediaCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
    categoryId?: number | null;
    media?: Prisma.MediaUncheckedCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneWithoutProductsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    media?: Prisma.MediaUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media?: Prisma.MediaUncheckedUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
    categoryId?: number | null;
};
export type ProductUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedManyWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput> | Prisma.ProductCreateWithoutMediaInput[] | Prisma.ProductUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput | Prisma.ProductCreateOrConnectWithoutMediaInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput> | Prisma.ProductCreateWithoutMediaInput[] | Prisma.ProductUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput | Prisma.ProductCreateOrConnectWithoutMediaInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput> | Prisma.ProductCreateWithoutMediaInput[] | Prisma.ProductUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput | Prisma.ProductCreateOrConnectWithoutMediaInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutMediaInput | Prisma.ProductUpsertWithWhereUniqueWithoutMediaInput[];
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutMediaInput | Prisma.ProductUpdateWithWhereUniqueWithoutMediaInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutMediaInput | Prisma.ProductUpdateManyWithWhereWithoutMediaInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput> | Prisma.ProductCreateWithoutMediaInput[] | Prisma.ProductUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput | Prisma.ProductCreateOrConnectWithoutMediaInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutMediaInput | Prisma.ProductUpsertWithWhereUniqueWithoutMediaInput[];
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutMediaInput | Prisma.ProductUpdateWithWhereUniqueWithoutMediaInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutMediaInput | Prisma.ProductUpdateManyWithWhereWithoutMediaInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBrandInput | Prisma.ProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBrandInput | Prisma.ProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutVariantsInput, Prisma.ProductUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutVariantsInput, Prisma.ProductUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.ProductUpsertWithoutVariantsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutVariantsInput, Prisma.ProductUpdateWithoutVariantsInput>, Prisma.ProductUncheckedUpdateWithoutVariantsInput>;
};
export type ProductCreateWithoutMediaInput = {
    name: string;
    description?: string | null;
    brand?: Prisma.BrandCreateNestedOneWithoutProductsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutMediaInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
    categoryId?: number | null;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutMediaInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
};
export type ProductUpsertWithWhereUniqueWithoutMediaInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutMediaInput, Prisma.ProductUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
};
export type ProductUpdateWithWhereUniqueWithoutMediaInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutMediaInput, Prisma.ProductUncheckedUpdateWithoutMediaInput>;
};
export type ProductUpdateManyWithWhereWithoutMediaInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutMediaInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brandId?: Prisma.IntNullableFilter<"Product"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Product"> | number | null;
};
export type ProductCreateWithoutCategoryInput = {
    name: string;
    description?: string | null;
    brand?: Prisma.BrandCreateNestedOneWithoutProductsInput;
    media?: Prisma.MediaCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
    media?: Prisma.MediaUncheckedCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductCreateManyCategoryInputEnvelope = {
    data: Prisma.ProductCreateManyCategoryInput | Prisma.ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
};
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProductCreateWithoutBrandInput = {
    name: string;
    description?: string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    media?: Prisma.MediaCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number;
    name: string;
    description?: string | null;
    categoryId?: number | null;
    media?: Prisma.MediaUncheckedCreateNestedManyWithoutProductsInput;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput>;
};
export type ProductCreateManyBrandInputEnvelope = {
    data: Prisma.ProductCreateManyBrandInput | Prisma.ProductCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutBrandInput, Prisma.ProductUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput>;
};
export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutBrandInput, Prisma.ProductUncheckedUpdateWithoutBrandInput>;
};
export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutBrandInput>;
};
export type ProductCreateWithoutVariantsInput = {
    name: string;
    description?: string | null;
    brand?: Prisma.BrandCreateNestedOneWithoutProductsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    media?: Prisma.MediaCreateNestedManyWithoutProductsInput;
};
export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
    categoryId?: number | null;
    media?: Prisma.MediaUncheckedCreateNestedManyWithoutProductsInput;
};
export type ProductCreateOrConnectWithoutVariantsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutVariantsInput, Prisma.ProductUncheckedCreateWithoutVariantsInput>;
};
export type ProductUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutVariantsInput, Prisma.ProductUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutVariantsInput, Prisma.ProductUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutVariantsInput, Prisma.ProductUncheckedUpdateWithoutVariantsInput>;
};
export type ProductUpdateWithoutVariantsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneWithoutProductsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    media?: Prisma.MediaUpdateManyWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media?: Prisma.MediaUncheckedUpdateManyWithoutProductsNestedInput;
};
export type ProductUpdateWithoutMediaInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneWithoutProductsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutMediaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductCreateManyCategoryInput = {
    id?: number;
    name: string;
    description?: string | null;
    brandId?: number | null;
};
export type ProductUpdateWithoutCategoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneWithoutProductsNestedInput;
    media?: Prisma.MediaUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media?: Prisma.MediaUncheckedUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductCreateManyBrandInput = {
    id?: number;
    name: string;
    description?: string | null;
    categoryId?: number | null;
};
export type ProductUpdateWithoutBrandInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.CategoryUpdateOneWithoutProductsNestedInput;
    media?: Prisma.MediaUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media?: Prisma.MediaUncheckedUpdateManyWithoutProductsNestedInput;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductCountOutputType = {
    media: number;
    variants: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    media?: boolean | ProductCountOutputTypeCountMediaArgs;
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaWhereInput;
};
export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    media?: boolean | Prisma.Product$mediaArgs<ExtArgs>;
    variants?: boolean | Prisma.Product$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "brandId" | "categoryId", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
    media?: boolean | Prisma.Product$mediaArgs<ExtArgs>;
    variants?: boolean | Prisma.Product$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.Product$brandArgs<ExtArgs>;
    category?: boolean | Prisma.Product$categoryArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        brand: Prisma.$BrandPayload<ExtArgs> | null;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        media: Prisma.$MediaPayload<ExtArgs>[];
        variants: Prisma.$ProductVariantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        brandId: number | null;
        categoryId: number | null;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.Product$brandArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$brandArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Product$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    media<T extends Prisma.Product$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    variants<T extends Prisma.Product$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'Int'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly brandId: Prisma.FieldRef<"Product", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Product", 'Int'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$brandArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
};
export type Product$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type Product$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    where?: Prisma.MediaWhereInput;
    orderBy?: Prisma.MediaOrderByWithRelationInput | Prisma.MediaOrderByWithRelationInput[];
    cursor?: Prisma.MediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MediaScalarFieldEnum | Prisma.MediaScalarFieldEnum[];
};
export type Product$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
