import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AttributeValueModel = runtime.Types.Result.DefaultSelection<Prisma.$AttributeValuePayload>;
export type AggregateAttributeValue = {
    _count: AttributeValueCountAggregateOutputType | null;
    _avg: AttributeValueAvgAggregateOutputType | null;
    _sum: AttributeValueSumAggregateOutputType | null;
    _min: AttributeValueMinAggregateOutputType | null;
    _max: AttributeValueMaxAggregateOutputType | null;
};
export type AttributeValueAvgAggregateOutputType = {
    id: number | null;
    attributeId: number | null;
};
export type AttributeValueSumAggregateOutputType = {
    id: number | null;
    attributeId: number | null;
};
export type AttributeValueMinAggregateOutputType = {
    id: number | null;
    value: string | null;
    attributeId: number | null;
};
export type AttributeValueMaxAggregateOutputType = {
    id: number | null;
    value: string | null;
    attributeId: number | null;
};
export type AttributeValueCountAggregateOutputType = {
    id: number;
    value: number;
    attributeId: number;
    _all: number;
};
export type AttributeValueAvgAggregateInputType = {
    id?: true;
    attributeId?: true;
};
export type AttributeValueSumAggregateInputType = {
    id?: true;
    attributeId?: true;
};
export type AttributeValueMinAggregateInputType = {
    id?: true;
    value?: true;
    attributeId?: true;
};
export type AttributeValueMaxAggregateInputType = {
    id?: true;
    value?: true;
    attributeId?: true;
};
export type AttributeValueCountAggregateInputType = {
    id?: true;
    value?: true;
    attributeId?: true;
    _all?: true;
};
export type AttributeValueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeValueWhereInput;
    orderBy?: Prisma.AttributeValueOrderByWithRelationInput | Prisma.AttributeValueOrderByWithRelationInput[];
    cursor?: Prisma.AttributeValueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttributeValueCountAggregateInputType;
    _avg?: AttributeValueAvgAggregateInputType;
    _sum?: AttributeValueSumAggregateInputType;
    _min?: AttributeValueMinAggregateInputType;
    _max?: AttributeValueMaxAggregateInputType;
};
export type GetAttributeValueAggregateType<T extends AttributeValueAggregateArgs> = {
    [P in keyof T & keyof AggregateAttributeValue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttributeValue[P]> : Prisma.GetScalarType<T[P], AggregateAttributeValue[P]>;
};
export type AttributeValueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeValueWhereInput;
    orderBy?: Prisma.AttributeValueOrderByWithAggregationInput | Prisma.AttributeValueOrderByWithAggregationInput[];
    by: Prisma.AttributeValueScalarFieldEnum[] | Prisma.AttributeValueScalarFieldEnum;
    having?: Prisma.AttributeValueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttributeValueCountAggregateInputType | true;
    _avg?: AttributeValueAvgAggregateInputType;
    _sum?: AttributeValueSumAggregateInputType;
    _min?: AttributeValueMinAggregateInputType;
    _max?: AttributeValueMaxAggregateInputType;
};
export type AttributeValueGroupByOutputType = {
    id: number;
    value: string;
    attributeId: number;
    _count: AttributeValueCountAggregateOutputType | null;
    _avg: AttributeValueAvgAggregateOutputType | null;
    _sum: AttributeValueSumAggregateOutputType | null;
    _min: AttributeValueMinAggregateOutputType | null;
    _max: AttributeValueMaxAggregateOutputType | null;
};
export type GetAttributeValueGroupByPayload<T extends AttributeValueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttributeValueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttributeValueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttributeValueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttributeValueGroupByOutputType[P]>;
}>>;
export type AttributeValueWhereInput = {
    AND?: Prisma.AttributeValueWhereInput | Prisma.AttributeValueWhereInput[];
    OR?: Prisma.AttributeValueWhereInput[];
    NOT?: Prisma.AttributeValueWhereInput | Prisma.AttributeValueWhereInput[];
    id?: Prisma.IntFilter<"AttributeValue"> | number;
    value?: Prisma.StringFilter<"AttributeValue"> | string;
    attributeId?: Prisma.IntFilter<"AttributeValue"> | number;
    attribute?: Prisma.XOR<Prisma.AttributeScalarRelationFilter, Prisma.AttributeWhereInput>;
    variants?: Prisma.ProductVariantListRelationFilter;
};
export type AttributeValueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
    attribute?: Prisma.AttributeOrderByWithRelationInput;
    variants?: Prisma.ProductVariantOrderByRelationAggregateInput;
};
export type AttributeValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AttributeValueWhereInput | Prisma.AttributeValueWhereInput[];
    OR?: Prisma.AttributeValueWhereInput[];
    NOT?: Prisma.AttributeValueWhereInput | Prisma.AttributeValueWhereInput[];
    value?: Prisma.StringFilter<"AttributeValue"> | string;
    attributeId?: Prisma.IntFilter<"AttributeValue"> | number;
    attribute?: Prisma.XOR<Prisma.AttributeScalarRelationFilter, Prisma.AttributeWhereInput>;
    variants?: Prisma.ProductVariantListRelationFilter;
}, "id">;
export type AttributeValueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
    _count?: Prisma.AttributeValueCountOrderByAggregateInput;
    _avg?: Prisma.AttributeValueAvgOrderByAggregateInput;
    _max?: Prisma.AttributeValueMaxOrderByAggregateInput;
    _min?: Prisma.AttributeValueMinOrderByAggregateInput;
    _sum?: Prisma.AttributeValueSumOrderByAggregateInput;
};
export type AttributeValueScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttributeValueScalarWhereWithAggregatesInput | Prisma.AttributeValueScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttributeValueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttributeValueScalarWhereWithAggregatesInput | Prisma.AttributeValueScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AttributeValue"> | number;
    value?: Prisma.StringWithAggregatesFilter<"AttributeValue"> | string;
    attributeId?: Prisma.IntWithAggregatesFilter<"AttributeValue"> | number;
};
export type AttributeValueCreateInput = {
    value: string;
    attribute: Prisma.AttributeCreateNestedOneWithoutValuesInput;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutAttributesInput;
};
export type AttributeValueUncheckedCreateInput = {
    id?: number;
    value: string;
    attributeId: number;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutAttributesInput;
};
export type AttributeValueUpdateInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attribute?: Prisma.AttributeUpdateOneRequiredWithoutValuesNestedInput;
    variants?: Prisma.ProductVariantUpdateManyWithoutAttributesNestedInput;
};
export type AttributeValueUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributeId?: Prisma.IntFieldUpdateOperationsInput | number;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutAttributesNestedInput;
};
export type AttributeValueCreateManyInput = {
    id?: number;
    value: string;
    attributeId: number;
};
export type AttributeValueUpdateManyMutationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeValueUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttributeValueListRelationFilter = {
    every?: Prisma.AttributeValueWhereInput;
    some?: Prisma.AttributeValueWhereInput;
    none?: Prisma.AttributeValueWhereInput;
};
export type AttributeValueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttributeValueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
};
export type AttributeValueAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
};
export type AttributeValueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
};
export type AttributeValueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
};
export type AttributeValueSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attributeId?: Prisma.SortOrder;
};
export type AttributeValueCreateNestedManyWithoutAttributeInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput> | Prisma.AttributeValueCreateWithoutAttributeInput[] | Prisma.AttributeValueUncheckedCreateWithoutAttributeInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutAttributeInput | Prisma.AttributeValueCreateOrConnectWithoutAttributeInput[];
    createMany?: Prisma.AttributeValueCreateManyAttributeInputEnvelope;
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
};
export type AttributeValueUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput> | Prisma.AttributeValueCreateWithoutAttributeInput[] | Prisma.AttributeValueUncheckedCreateWithoutAttributeInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutAttributeInput | Prisma.AttributeValueCreateOrConnectWithoutAttributeInput[];
    createMany?: Prisma.AttributeValueCreateManyAttributeInputEnvelope;
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
};
export type AttributeValueUpdateManyWithoutAttributeNestedInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput> | Prisma.AttributeValueCreateWithoutAttributeInput[] | Prisma.AttributeValueUncheckedCreateWithoutAttributeInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutAttributeInput | Prisma.AttributeValueCreateOrConnectWithoutAttributeInput[];
    upsert?: Prisma.AttributeValueUpsertWithWhereUniqueWithoutAttributeInput | Prisma.AttributeValueUpsertWithWhereUniqueWithoutAttributeInput[];
    createMany?: Prisma.AttributeValueCreateManyAttributeInputEnvelope;
    set?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    disconnect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    delete?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    update?: Prisma.AttributeValueUpdateWithWhereUniqueWithoutAttributeInput | Prisma.AttributeValueUpdateWithWhereUniqueWithoutAttributeInput[];
    updateMany?: Prisma.AttributeValueUpdateManyWithWhereWithoutAttributeInput | Prisma.AttributeValueUpdateManyWithWhereWithoutAttributeInput[];
    deleteMany?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
};
export type AttributeValueUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput> | Prisma.AttributeValueCreateWithoutAttributeInput[] | Prisma.AttributeValueUncheckedCreateWithoutAttributeInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutAttributeInput | Prisma.AttributeValueCreateOrConnectWithoutAttributeInput[];
    upsert?: Prisma.AttributeValueUpsertWithWhereUniqueWithoutAttributeInput | Prisma.AttributeValueUpsertWithWhereUniqueWithoutAttributeInput[];
    createMany?: Prisma.AttributeValueCreateManyAttributeInputEnvelope;
    set?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    disconnect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    delete?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    update?: Prisma.AttributeValueUpdateWithWhereUniqueWithoutAttributeInput | Prisma.AttributeValueUpdateWithWhereUniqueWithoutAttributeInput[];
    updateMany?: Prisma.AttributeValueUpdateManyWithWhereWithoutAttributeInput | Prisma.AttributeValueUpdateManyWithWhereWithoutAttributeInput[];
    deleteMany?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
};
export type AttributeValueCreateNestedManyWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput> | Prisma.AttributeValueCreateWithoutVariantsInput[] | Prisma.AttributeValueUncheckedCreateWithoutVariantsInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutVariantsInput | Prisma.AttributeValueCreateOrConnectWithoutVariantsInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
};
export type AttributeValueUncheckedCreateNestedManyWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput> | Prisma.AttributeValueCreateWithoutVariantsInput[] | Prisma.AttributeValueUncheckedCreateWithoutVariantsInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutVariantsInput | Prisma.AttributeValueCreateOrConnectWithoutVariantsInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
};
export type AttributeValueUpdateManyWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput> | Prisma.AttributeValueCreateWithoutVariantsInput[] | Prisma.AttributeValueUncheckedCreateWithoutVariantsInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutVariantsInput | Prisma.AttributeValueCreateOrConnectWithoutVariantsInput[];
    upsert?: Prisma.AttributeValueUpsertWithWhereUniqueWithoutVariantsInput | Prisma.AttributeValueUpsertWithWhereUniqueWithoutVariantsInput[];
    set?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    disconnect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    delete?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    update?: Prisma.AttributeValueUpdateWithWhereUniqueWithoutVariantsInput | Prisma.AttributeValueUpdateWithWhereUniqueWithoutVariantsInput[];
    updateMany?: Prisma.AttributeValueUpdateManyWithWhereWithoutVariantsInput | Prisma.AttributeValueUpdateManyWithWhereWithoutVariantsInput[];
    deleteMany?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
};
export type AttributeValueUncheckedUpdateManyWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput> | Prisma.AttributeValueCreateWithoutVariantsInput[] | Prisma.AttributeValueUncheckedCreateWithoutVariantsInput[];
    connectOrCreate?: Prisma.AttributeValueCreateOrConnectWithoutVariantsInput | Prisma.AttributeValueCreateOrConnectWithoutVariantsInput[];
    upsert?: Prisma.AttributeValueUpsertWithWhereUniqueWithoutVariantsInput | Prisma.AttributeValueUpsertWithWhereUniqueWithoutVariantsInput[];
    set?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    disconnect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    delete?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    connect?: Prisma.AttributeValueWhereUniqueInput | Prisma.AttributeValueWhereUniqueInput[];
    update?: Prisma.AttributeValueUpdateWithWhereUniqueWithoutVariantsInput | Prisma.AttributeValueUpdateWithWhereUniqueWithoutVariantsInput[];
    updateMany?: Prisma.AttributeValueUpdateManyWithWhereWithoutVariantsInput | Prisma.AttributeValueUpdateManyWithWhereWithoutVariantsInput[];
    deleteMany?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
};
export type AttributeValueCreateWithoutAttributeInput = {
    value: string;
    variants?: Prisma.ProductVariantCreateNestedManyWithoutAttributesInput;
};
export type AttributeValueUncheckedCreateWithoutAttributeInput = {
    id?: number;
    value: string;
    variants?: Prisma.ProductVariantUncheckedCreateNestedManyWithoutAttributesInput;
};
export type AttributeValueCreateOrConnectWithoutAttributeInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput>;
};
export type AttributeValueCreateManyAttributeInputEnvelope = {
    data: Prisma.AttributeValueCreateManyAttributeInput | Prisma.AttributeValueCreateManyAttributeInput[];
    skipDuplicates?: boolean;
};
export type AttributeValueUpsertWithWhereUniqueWithoutAttributeInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttributeValueUpdateWithoutAttributeInput, Prisma.AttributeValueUncheckedUpdateWithoutAttributeInput>;
    create: Prisma.XOR<Prisma.AttributeValueCreateWithoutAttributeInput, Prisma.AttributeValueUncheckedCreateWithoutAttributeInput>;
};
export type AttributeValueUpdateWithWhereUniqueWithoutAttributeInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttributeValueUpdateWithoutAttributeInput, Prisma.AttributeValueUncheckedUpdateWithoutAttributeInput>;
};
export type AttributeValueUpdateManyWithWhereWithoutAttributeInput = {
    where: Prisma.AttributeValueScalarWhereInput;
    data: Prisma.XOR<Prisma.AttributeValueUpdateManyMutationInput, Prisma.AttributeValueUncheckedUpdateManyWithoutAttributeInput>;
};
export type AttributeValueScalarWhereInput = {
    AND?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
    OR?: Prisma.AttributeValueScalarWhereInput[];
    NOT?: Prisma.AttributeValueScalarWhereInput | Prisma.AttributeValueScalarWhereInput[];
    id?: Prisma.IntFilter<"AttributeValue"> | number;
    value?: Prisma.StringFilter<"AttributeValue"> | string;
    attributeId?: Prisma.IntFilter<"AttributeValue"> | number;
};
export type AttributeValueCreateWithoutVariantsInput = {
    value: string;
    attribute: Prisma.AttributeCreateNestedOneWithoutValuesInput;
};
export type AttributeValueUncheckedCreateWithoutVariantsInput = {
    id?: number;
    value: string;
    attributeId: number;
};
export type AttributeValueCreateOrConnectWithoutVariantsInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput>;
};
export type AttributeValueUpsertWithWhereUniqueWithoutVariantsInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttributeValueUpdateWithoutVariantsInput, Prisma.AttributeValueUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.AttributeValueCreateWithoutVariantsInput, Prisma.AttributeValueUncheckedCreateWithoutVariantsInput>;
};
export type AttributeValueUpdateWithWhereUniqueWithoutVariantsInput = {
    where: Prisma.AttributeValueWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttributeValueUpdateWithoutVariantsInput, Prisma.AttributeValueUncheckedUpdateWithoutVariantsInput>;
};
export type AttributeValueUpdateManyWithWhereWithoutVariantsInput = {
    where: Prisma.AttributeValueScalarWhereInput;
    data: Prisma.XOR<Prisma.AttributeValueUpdateManyMutationInput, Prisma.AttributeValueUncheckedUpdateManyWithoutVariantsInput>;
};
export type AttributeValueCreateManyAttributeInput = {
    id?: number;
    value: string;
};
export type AttributeValueUpdateWithoutAttributeInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    variants?: Prisma.ProductVariantUpdateManyWithoutAttributesNestedInput;
};
export type AttributeValueUncheckedUpdateWithoutAttributeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    variants?: Prisma.ProductVariantUncheckedUpdateManyWithoutAttributesNestedInput;
};
export type AttributeValueUncheckedUpdateManyWithoutAttributeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeValueUpdateWithoutVariantsInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attribute?: Prisma.AttributeUpdateOneRequiredWithoutValuesNestedInput;
};
export type AttributeValueUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttributeValueUncheckedUpdateManyWithoutVariantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    attributeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttributeValueCountOutputType = {
    variants: number;
};
export type AttributeValueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variants?: boolean | AttributeValueCountOutputTypeCountVariantsArgs;
};
export type AttributeValueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueCountOutputTypeSelect<ExtArgs> | null;
};
export type AttributeValueCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
};
export type AttributeValueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    attributeId?: boolean;
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.AttributeValue$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttributeValueCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attributeValue"]>;
export type AttributeValueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    attributeId?: boolean;
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attributeValue"]>;
export type AttributeValueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    attributeId?: boolean;
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attributeValue"]>;
export type AttributeValueSelectScalar = {
    id?: boolean;
    value?: boolean;
    attributeId?: boolean;
};
export type AttributeValueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "value" | "attributeId", ExtArgs["result"]["attributeValue"]>;
export type AttributeValueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.AttributeValue$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.AttributeValueCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttributeValueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
};
export type AttributeValueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attribute?: boolean | Prisma.AttributeDefaultArgs<ExtArgs>;
};
export type $AttributeValuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttributeValue";
    objects: {
        attribute: Prisma.$AttributePayload<ExtArgs>;
        variants: Prisma.$ProductVariantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        value: string;
        attributeId: number;
    }, ExtArgs["result"]["attributeValue"]>;
    composites: {};
};
export type AttributeValueGetPayload<S extends boolean | null | undefined | AttributeValueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload, S>;
export type AttributeValueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttributeValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttributeValueCountAggregateInputType | true;
};
export interface AttributeValueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttributeValue'];
        meta: {
            name: 'AttributeValue';
        };
    };
    findUnique<T extends AttributeValueFindUniqueArgs>(args: Prisma.SelectSubset<T, AttributeValueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttributeValueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttributeValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttributeValueFindFirstArgs>(args?: Prisma.SelectSubset<T, AttributeValueFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttributeValueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttributeValueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttributeValueFindManyArgs>(args?: Prisma.SelectSubset<T, AttributeValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttributeValueCreateArgs>(args: Prisma.SelectSubset<T, AttributeValueCreateArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttributeValueCreateManyArgs>(args?: Prisma.SelectSubset<T, AttributeValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttributeValueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttributeValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttributeValueDeleteArgs>(args: Prisma.SelectSubset<T, AttributeValueDeleteArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttributeValueUpdateArgs>(args: Prisma.SelectSubset<T, AttributeValueUpdateArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttributeValueDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttributeValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttributeValueUpdateManyArgs>(args: Prisma.SelectSubset<T, AttributeValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttributeValueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttributeValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttributeValueUpsertArgs>(args: Prisma.SelectSubset<T, AttributeValueUpsertArgs<ExtArgs>>): Prisma.Prisma__AttributeValueClient<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttributeValueCountArgs>(args?: Prisma.Subset<T, AttributeValueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttributeValueCountAggregateOutputType> : number>;
    aggregate<T extends AttributeValueAggregateArgs>(args: Prisma.Subset<T, AttributeValueAggregateArgs>): Prisma.PrismaPromise<GetAttributeValueAggregateType<T>>;
    groupBy<T extends AttributeValueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttributeValueGroupByArgs['orderBy'];
    } : {
        orderBy?: AttributeValueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttributeValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttributeValueFieldRefs;
}
export interface Prisma__AttributeValueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attribute<T extends Prisma.AttributeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttributeDefaultArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.AttributeValue$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttributeValue$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttributeValueFieldRefs {
    readonly id: Prisma.FieldRef<"AttributeValue", 'Int'>;
    readonly value: Prisma.FieldRef<"AttributeValue", 'String'>;
    readonly attributeId: Prisma.FieldRef<"AttributeValue", 'Int'>;
}
export type AttributeValueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    where: Prisma.AttributeValueWhereUniqueInput;
};
export type AttributeValueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    where: Prisma.AttributeValueWhereUniqueInput;
};
export type AttributeValueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttributeValueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttributeValueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttributeValueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeValueCreateInput, Prisma.AttributeValueUncheckedCreateInput>;
};
export type AttributeValueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttributeValueCreateManyInput | Prisma.AttributeValueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttributeValueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    data: Prisma.AttributeValueCreateManyInput | Prisma.AttributeValueCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttributeValueIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttributeValueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeValueUpdateInput, Prisma.AttributeValueUncheckedUpdateInput>;
    where: Prisma.AttributeValueWhereUniqueInput;
};
export type AttributeValueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttributeValueUpdateManyMutationInput, Prisma.AttributeValueUncheckedUpdateManyInput>;
    where?: Prisma.AttributeValueWhereInput;
    limit?: number;
};
export type AttributeValueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeValueUpdateManyMutationInput, Prisma.AttributeValueUncheckedUpdateManyInput>;
    where?: Prisma.AttributeValueWhereInput;
    limit?: number;
    include?: Prisma.AttributeValueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttributeValueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    where: Prisma.AttributeValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttributeValueCreateInput, Prisma.AttributeValueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttributeValueUpdateInput, Prisma.AttributeValueUncheckedUpdateInput>;
};
export type AttributeValueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
    where: Prisma.AttributeValueWhereUniqueInput;
};
export type AttributeValueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeValueWhereInput;
    limit?: number;
};
export type AttributeValue$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttributeValueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeValueSelect<ExtArgs> | null;
    omit?: Prisma.AttributeValueOmit<ExtArgs> | null;
    include?: Prisma.AttributeValueInclude<ExtArgs> | null;
};
