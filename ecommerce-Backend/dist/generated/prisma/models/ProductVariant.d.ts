import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductVariantModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductVariantPayload>;
export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
export type ProductVariantAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    price: number | null;
    stock: number | null;
};
export type ProductVariantSumAggregateOutputType = {
    id: number | null;
    productId: number | null;
    price: number | null;
    stock: number | null;
};
export type ProductVariantMinAggregateOutputType = {
    id: number | null;
    productId: number | null;
    sku: string | null;
    price: number | null;
    stock: number | null;
};
export type ProductVariantMaxAggregateOutputType = {
    id: number | null;
    productId: number | null;
    sku: string | null;
    price: number | null;
    stock: number | null;
};
export type ProductVariantCountAggregateOutputType = {
    id: number;
    productId: number;
    sku: number;
    price: number;
    stock: number;
    _all: number;
};
export type ProductVariantAvgAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    stock?: true;
};
export type ProductVariantSumAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    stock?: true;
};
export type ProductVariantMinAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    price?: true;
    stock?: true;
};
export type ProductVariantMaxAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    price?: true;
    stock?: true;
};
export type ProductVariantCountAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    price?: true;
    stock?: true;
    _all?: true;
};
export type ProductVariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductVariantCountAggregateInputType;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
    [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductVariant[P]> : Prisma.GetScalarType<T[P], AggregateProductVariant[P]>;
};
export type ProductVariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithAggregationInput | Prisma.ProductVariantOrderByWithAggregationInput[];
    by: Prisma.ProductVariantScalarFieldEnum[] | Prisma.ProductVariantScalarFieldEnum;
    having?: Prisma.ProductVariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductVariantCountAggregateInputType | true;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type ProductVariantGroupByOutputType = {
    id: number;
    productId: number;
    sku: string;
    price: number;
    stock: number;
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
export type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductVariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]>;
}>>;
export type ProductVariantWhereInput = {
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    id?: Prisma.IntFilter<"ProductVariant"> | number;
    productId?: Prisma.IntFilter<"ProductVariant"> | number;
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    price?: Prisma.FloatFilter<"ProductVariant"> | number;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    attributes?: Prisma.AttributeValueListRelationFilter;
};
export type ProductVariantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    attributes?: Prisma.AttributeValueOrderByRelationAggregateInput;
};
export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    sku?: string;
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    productId?: Prisma.IntFilter<"ProductVariant"> | number;
    price?: Prisma.FloatFilter<"ProductVariant"> | number;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    attributes?: Prisma.AttributeValueListRelationFilter;
}, "id" | "sku">;
export type ProductVariantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    _count?: Prisma.ProductVariantCountOrderByAggregateInput;
    _avg?: Prisma.ProductVariantAvgOrderByAggregateInput;
    _max?: Prisma.ProductVariantMaxOrderByAggregateInput;
    _min?: Prisma.ProductVariantMinOrderByAggregateInput;
    _sum?: Prisma.ProductVariantSumOrderByAggregateInput;
};
export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductVariant"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"ProductVariant"> | number;
    sku?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"ProductVariant"> | number;
    stock?: Prisma.IntWithAggregatesFilter<"ProductVariant"> | number;
};
export type ProductVariantCreateInput = {
    sku: string;
    price: number;
    stock?: number;
    product: Prisma.ProductCreateNestedOneWithoutVariantsInput;
    attributes?: Prisma.AttributeValueCreateNestedManyWithoutVariantsInput;
};
export type ProductVariantUncheckedCreateInput = {
    id?: number;
    productId: number;
    sku: string;
    price: number;
    stock?: number;
    attributes?: Prisma.AttributeValueUncheckedCreateNestedManyWithoutVariantsInput;
};
export type ProductVariantUpdateInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput;
    attributes?: Prisma.AttributeValueUpdateManyWithoutVariantsNestedInput;
};
export type ProductVariantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.AttributeValueUncheckedUpdateManyWithoutVariantsNestedInput;
};
export type ProductVariantCreateManyInput = {
    id?: number;
    productId: number;
    sku: string;
    price: number;
    stock?: number;
};
export type ProductVariantUpdateManyMutationInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantListRelationFilter = {
    every?: Prisma.ProductVariantWhereInput;
    some?: Prisma.ProductVariantWhereInput;
    none?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductVariantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantCreateNestedManyWithoutAttributesInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput> | Prisma.ProductVariantCreateWithoutAttributesInput[] | Prisma.ProductVariantUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutAttributesInput | Prisma.ProductVariantCreateOrConnectWithoutAttributesInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUncheckedCreateNestedManyWithoutAttributesInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput> | Prisma.ProductVariantCreateWithoutAttributesInput[] | Prisma.ProductVariantUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutAttributesInput | Prisma.ProductVariantCreateOrConnectWithoutAttributesInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUpdateManyWithoutAttributesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput> | Prisma.ProductVariantCreateWithoutAttributesInput[] | Prisma.ProductVariantUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutAttributesInput | Prisma.ProductVariantCreateOrConnectWithoutAttributesInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutAttributesInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutAttributesInput[];
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutAttributesInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutAttributesInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutAttributesInput | Prisma.ProductVariantUpdateManyWithWhereWithoutAttributesInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput> | Prisma.ProductVariantCreateWithoutAttributesInput[] | Prisma.ProductVariantUncheckedCreateWithoutAttributesInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutAttributesInput | Prisma.ProductVariantCreateOrConnectWithoutAttributesInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutAttributesInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutAttributesInput[];
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutAttributesInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutAttributesInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutAttributesInput | Prisma.ProductVariantUpdateManyWithWhereWithoutAttributesInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductVariantCreateWithoutAttributesInput = {
    sku: string;
    price: number;
    stock?: number;
    product: Prisma.ProductCreateNestedOneWithoutVariantsInput;
};
export type ProductVariantUncheckedCreateWithoutAttributesInput = {
    id?: number;
    productId: number;
    sku: string;
    price: number;
    stock?: number;
};
export type ProductVariantCreateOrConnectWithoutAttributesInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput>;
};
export type ProductVariantUpsertWithWhereUniqueWithoutAttributesInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutAttributesInput, Prisma.ProductVariantUncheckedUpdateWithoutAttributesInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutAttributesInput, Prisma.ProductVariantUncheckedCreateWithoutAttributesInput>;
};
export type ProductVariantUpdateWithWhereUniqueWithoutAttributesInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutAttributesInput, Prisma.ProductVariantUncheckedUpdateWithoutAttributesInput>;
};
export type ProductVariantUpdateManyWithWhereWithoutAttributesInput = {
    where: Prisma.ProductVariantScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyWithoutAttributesInput>;
};
export type ProductVariantScalarWhereInput = {
    AND?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    OR?: Prisma.ProductVariantScalarWhereInput[];
    NOT?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    id?: Prisma.IntFilter<"ProductVariant"> | number;
    productId?: Prisma.IntFilter<"ProductVariant"> | number;
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    price?: Prisma.FloatFilter<"ProductVariant"> | number;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
};
export type ProductVariantCreateWithoutProductInput = {
    sku: string;
    price: number;
    stock?: number;
    attributes?: Prisma.AttributeValueCreateNestedManyWithoutVariantsInput;
};
export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number;
    sku: string;
    price: number;
    stock?: number;
    attributes?: Prisma.AttributeValueUncheckedCreateNestedManyWithoutVariantsInput;
};
export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantCreateManyProductInputEnvelope = {
    data: Prisma.ProductVariantCreateManyProductInput | Prisma.ProductVariantCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
};
export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductVariantScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyWithoutProductInput>;
};
export type ProductVariantUpdateWithoutAttributesInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutAttributesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantUncheckedUpdateManyWithoutAttributesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantCreateManyProductInput = {
    id?: number;
    sku: string;
    price: number;
    stock?: number;
};
export type ProductVariantUpdateWithoutProductInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.AttributeValueUpdateManyWithoutVariantsNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.AttributeValueUncheckedUpdateManyWithoutVariantsNestedInput;
};
export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantCountOutputType = {
    attributes: number;
};
export type ProductVariantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attributes?: boolean | ProductVariantCountOutputTypeCountAttributesArgs;
};
export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductVariantCountOutputTypeCountAttributesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeValueWhereInput;
};
export type ProductVariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    price?: boolean;
    stock?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.ProductVariant$attributesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    price?: boolean;
    stock?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    price?: boolean;
    stock?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectScalar = {
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    price?: boolean;
    stock?: boolean;
};
export type ProductVariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "sku" | "price" | "stock", ExtArgs["result"]["productVariant"]>;
export type ProductVariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    attributes?: boolean | Prisma.ProductVariant$attributesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductVariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductVariant";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        attributes: Prisma.$AttributeValuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productId: number;
        sku: string;
        price: number;
        stock: number;
    }, ExtArgs["result"]["productVariant"]>;
    composites: {};
};
export type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload, S>;
export type ProductVariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductVariantCountAggregateInputType | true;
};
export interface ProductVariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'];
        meta: {
            name: 'ProductVariant';
        };
    };
    findUnique<T extends ProductVariantFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductVariantFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductVariantFindManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductVariantCreateArgs>(args: Prisma.SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductVariantCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductVariantDeleteArgs>(args: Prisma.SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductVariantUpdateArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductVariantUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductVariantUpsertArgs>(args: Prisma.SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductVariantCountArgs>(args?: Prisma.Subset<T, ProductVariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductVariantCountAggregateOutputType> : number>;
    aggregate<T extends ProductVariantAggregateArgs>(args: Prisma.Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>;
    groupBy<T extends ProductVariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductVariantGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductVariantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductVariantFieldRefs;
}
export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attributes<T extends Prisma.ProductVariant$attributesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariant$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductVariantFieldRefs {
    readonly id: Prisma.FieldRef<"ProductVariant", 'Int'>;
    readonly productId: Prisma.FieldRef<"ProductVariant", 'Int'>;
    readonly sku: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly price: Prisma.FieldRef<"ProductVariant", 'Float'>;
    readonly stock: Prisma.FieldRef<"ProductVariant", 'Int'>;
}
export type ProductVariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductVariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductVariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
};
export type ProductVariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
    include?: Prisma.ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
};
export type ProductVariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariant$attributesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    where?: Prisma.AttributeValueWhereInput;
    orderBy?: Prisma.AttributeValueOrderByWithRelationInput | Prisma.AttributeValueOrderByWithRelationInput[];
    cursor?: Prisma.AttributeValueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttributeValueScalarFieldEnum | Prisma.AttributeValueScalarFieldEnum[];
};
export type ProductVariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
};
