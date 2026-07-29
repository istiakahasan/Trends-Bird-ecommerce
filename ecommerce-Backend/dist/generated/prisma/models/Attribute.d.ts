import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AttributeModel = runtime.Types.Result.DefaultSelection<Prisma.$AttributePayload>;
export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null;
    _avg: AttributeAvgAggregateOutputType | null;
    _sum: AttributeSumAggregateOutputType | null;
    _min: AttributeMinAggregateOutputType | null;
    _max: AttributeMaxAggregateOutputType | null;
};
export type AttributeAvgAggregateOutputType = {
    id: number | null;
};
export type AttributeSumAggregateOutputType = {
    id: number | null;
};
export type AttributeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
    type: string | null;
};
export type AttributeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
    type: string | null;
};
export type AttributeCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    type: number;
    _all: number;
};
export type AttributeAvgAggregateInputType = {
    id?: true;
};
export type AttributeSumAggregateInputType = {
    id?: true;
};
export type AttributeMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
};
export type AttributeMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
};
export type AttributeCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
    _all?: true;
};
export type AttributeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeWhereInput;
    orderBy?: Prisma.AttributeOrderByWithRelationInput | Prisma.AttributeOrderByWithRelationInput[];
    cursor?: Prisma.AttributeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttributeCountAggregateInputType;
    _avg?: AttributeAvgAggregateInputType;
    _sum?: AttributeSumAggregateInputType;
    _min?: AttributeMinAggregateInputType;
    _max?: AttributeMaxAggregateInputType;
};
export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
    [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttribute[P]> : Prisma.GetScalarType<T[P], AggregateAttribute[P]>;
};
export type AttributeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeWhereInput;
    orderBy?: Prisma.AttributeOrderByWithAggregationInput | Prisma.AttributeOrderByWithAggregationInput[];
    by: Prisma.AttributeScalarFieldEnum[] | Prisma.AttributeScalarFieldEnum;
    having?: Prisma.AttributeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttributeCountAggregateInputType | true;
    _avg?: AttributeAvgAggregateInputType;
    _sum?: AttributeSumAggregateInputType;
    _min?: AttributeMinAggregateInputType;
    _max?: AttributeMaxAggregateInputType;
};
export type AttributeGroupByOutputType = {
    id: number;
    name: string;
    slug: string;
    type: string;
    _count: AttributeCountAggregateOutputType | null;
    _avg: AttributeAvgAggregateOutputType | null;
    _sum: AttributeSumAggregateOutputType | null;
    _min: AttributeMinAggregateOutputType | null;
    _max: AttributeMaxAggregateOutputType | null;
};
export type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttributeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttributeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttributeGroupByOutputType[P]>;
}>>;
export type AttributeWhereInput = {
    AND?: Prisma.AttributeWhereInput | Prisma.AttributeWhereInput[];
    OR?: Prisma.AttributeWhereInput[];
    NOT?: Prisma.AttributeWhereInput | Prisma.AttributeWhereInput[];
    id?: Prisma.IntFilter<"Attribute"> | number;
    name?: Prisma.StringFilter<"Attribute"> | string;
    slug?: Prisma.StringFilter<"Attribute"> | string;
    type?: Prisma.StringFilter<"Attribute"> | string;
    values?: Prisma.AttributeValueListRelationFilter;
};
export type AttributeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    values?: Prisma.AttributeValueOrderByRelationAggregateInput;
};
export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    slug?: string;
    AND?: Prisma.AttributeWhereInput | Prisma.AttributeWhereInput[];
    OR?: Prisma.AttributeWhereInput[];
    NOT?: Prisma.AttributeWhereInput | Prisma.AttributeWhereInput[];
    type?: Prisma.StringFilter<"Attribute"> | string;
    values?: Prisma.AttributeValueListRelationFilter;
}, "id" | "name" | "slug">;
export type AttributeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.AttributeCountOrderByAggregateInput;
    _avg?: Prisma.AttributeAvgOrderByAggregateInput;
    _max?: Prisma.AttributeMaxOrderByAggregateInput;
    _min?: Prisma.AttributeMinOrderByAggregateInput;
    _sum?: Prisma.AttributeSumOrderByAggregateInput;
};
export type AttributeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttributeScalarWhereWithAggregatesInput | Prisma.AttributeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttributeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttributeScalarWhereWithAggregatesInput | Prisma.AttributeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Attribute"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Attribute"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Attribute"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Attribute"> | string;
};
export type AttributeCreateInput = {
    name: string;
    slug: string;
    type: string;
    values?: Prisma.AttributeValueCreateNestedManyWithoutAttributeInput;
};
export type AttributeUncheckedCreateInput = {
    id?: number;
    name: string;
    slug: string;
    type: string;
    values?: Prisma.AttributeValueUncheckedCreateNestedManyWithoutAttributeInput;
};
export type AttributeUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.AttributeValueUpdateManyWithoutAttributeNestedInput;
};
export type AttributeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.AttributeValueUncheckedUpdateManyWithoutAttributeNestedInput;
};
export type AttributeCreateManyInput = {
    id?: number;
    name: string;
    slug: string;
    type: string;
};
export type AttributeUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AttributeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AttributeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AttributeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AttributeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AttributeScalarRelationFilter = {
    is?: Prisma.AttributeWhereInput;
    isNot?: Prisma.AttributeWhereInput;
};
export type AttributeCreateNestedOneWithoutValuesInput = {
    create?: Prisma.XOR<Prisma.AttributeCreateWithoutValuesInput, Prisma.AttributeUncheckedCreateWithoutValuesInput>;
    connectOrCreate?: Prisma.AttributeCreateOrConnectWithoutValuesInput;
    connect?: Prisma.AttributeWhereUniqueInput;
};
export type AttributeUpdateOneRequiredWithoutValuesNestedInput = {
    create?: Prisma.XOR<Prisma.AttributeCreateWithoutValuesInput, Prisma.AttributeUncheckedCreateWithoutValuesInput>;
    connectOrCreate?: Prisma.AttributeCreateOrConnectWithoutValuesInput;
    upsert?: Prisma.AttributeUpsertWithoutValuesInput;
    connect?: Prisma.AttributeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttributeUpdateToOneWithWhereWithoutValuesInput, Prisma.AttributeUpdateWithoutValuesInput>, Prisma.AttributeUncheckedUpdateWithoutValuesInput>;
};
export type AttributeCreateWithoutValuesInput = {
    name: string;
    slug: string;
    type: string;
};
export type AttributeUncheckedCreateWithoutValuesInput = {
    id?: number;
    name: string;
    slug: string;
    type: string;
};
export type AttributeCreateOrConnectWithoutValuesInput = {
    where: Prisma.AttributeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttributeCreateWithoutValuesInput, Prisma.AttributeUncheckedCreateWithoutValuesInput>;
};
export type AttributeUpsertWithoutValuesInput = {
    update: Prisma.XOR<Prisma.AttributeUpdateWithoutValuesInput, Prisma.AttributeUncheckedUpdateWithoutValuesInput>;
    create: Prisma.XOR<Prisma.AttributeCreateWithoutValuesInput, Prisma.AttributeUncheckedCreateWithoutValuesInput>;
    where?: Prisma.AttributeWhereInput;
};
export type AttributeUpdateToOneWithWhereWithoutValuesInput = {
    where?: Prisma.AttributeWhereInput;
    data: Prisma.XOR<Prisma.AttributeUpdateWithoutValuesInput, Prisma.AttributeUncheckedUpdateWithoutValuesInput>;
};
export type AttributeUpdateWithoutValuesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeUncheckedUpdateWithoutValuesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttributeCountOutputType = {
    values: number;
};
export type AttributeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    values?: boolean | AttributeCountOutputTypeCountValuesArgs;
};
export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeCountOutputTypeSelect<ExtArgs> | null;
};
export type AttributeCountOutputTypeCountValuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeValueWhereInput;
};
export type AttributeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
    values?: boolean | Prisma.Attribute$valuesArgs<ExtArgs>;
    _count?: boolean | Prisma.AttributeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attribute"]>;
export type AttributeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
}, ExtArgs["result"]["attribute"]>;
export type AttributeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
}, ExtArgs["result"]["attribute"]>;
export type AttributeSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
};
export type AttributeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "type", ExtArgs["result"]["attribute"]>;
export type AttributeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    values?: boolean | Prisma.Attribute$valuesArgs<ExtArgs>;
    _count?: boolean | Prisma.AttributeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttributeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AttributePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attribute";
    objects: {
        values: Prisma.$AttributeValuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        slug: string;
        type: string;
    }, ExtArgs["result"]["attribute"]>;
    composites: {};
};
export type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttributePayload, S>;
export type AttributeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttributeCountAggregateInputType | true;
};
export interface AttributeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attribute'];
        meta: {
            name: 'Attribute';
        };
    };
    findUnique<T extends AttributeFindUniqueArgs>(args: Prisma.SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttributeFindFirstArgs>(args?: Prisma.SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttributeFindManyArgs>(args?: Prisma.SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttributeCreateArgs>(args: Prisma.SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttributeCreateManyArgs>(args?: Prisma.SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttributeDeleteArgs>(args: Prisma.SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttributeUpdateArgs>(args: Prisma.SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttributeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttributeUpdateManyArgs>(args: Prisma.SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttributeUpsertArgs>(args: Prisma.SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma.Prisma__AttributeClient<runtime.Types.Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttributeCountArgs>(args?: Prisma.Subset<T, AttributeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttributeCountAggregateOutputType> : number>;
    aggregate<T extends AttributeAggregateArgs>(args: Prisma.Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>;
    groupBy<T extends AttributeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttributeGroupByArgs['orderBy'];
    } : {
        orderBy?: AttributeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttributeFieldRefs;
}
export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    values<T extends Prisma.Attribute$valuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Attribute$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttributeFieldRefs {
    readonly id: Prisma.FieldRef<"Attribute", 'Int'>;
    readonly name: Prisma.FieldRef<"Attribute", 'String'>;
    readonly slug: Prisma.FieldRef<"Attribute", 'String'>;
    readonly type: Prisma.FieldRef<"Attribute", 'String'>;
}
export type AttributeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where: Prisma.AttributeWhereUniqueInput;
};
export type AttributeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where: Prisma.AttributeWhereUniqueInput;
};
export type AttributeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where?: Prisma.AttributeWhereInput;
    orderBy?: Prisma.AttributeOrderByWithRelationInput | Prisma.AttributeOrderByWithRelationInput[];
    cursor?: Prisma.AttributeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttributeScalarFieldEnum | Prisma.AttributeScalarFieldEnum[];
};
export type AttributeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where?: Prisma.AttributeWhereInput;
    orderBy?: Prisma.AttributeOrderByWithRelationInput | Prisma.AttributeOrderByWithRelationInput[];
    cursor?: Prisma.AttributeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttributeScalarFieldEnum | Prisma.AttributeScalarFieldEnum[];
};
export type AttributeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where?: Prisma.AttributeWhereInput;
    orderBy?: Prisma.AttributeOrderByWithRelationInput | Prisma.AttributeOrderByWithRelationInput[];
    cursor?: Prisma.AttributeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttributeScalarFieldEnum | Prisma.AttributeScalarFieldEnum[];
};
export type AttributeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeCreateInput, Prisma.AttributeUncheckedCreateInput>;
};
export type AttributeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttributeCreateManyInput | Prisma.AttributeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttributeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    data: Prisma.AttributeCreateManyInput | Prisma.AttributeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttributeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeUpdateInput, Prisma.AttributeUncheckedUpdateInput>;
    where: Prisma.AttributeWhereUniqueInput;
};
export type AttributeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttributeUpdateManyMutationInput, Prisma.AttributeUncheckedUpdateManyInput>;
    where?: Prisma.AttributeWhereInput;
    limit?: number;
};
export type AttributeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttributeUpdateManyMutationInput, Prisma.AttributeUncheckedUpdateManyInput>;
    where?: Prisma.AttributeWhereInput;
    limit?: number;
};
export type AttributeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where: Prisma.AttributeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttributeCreateInput, Prisma.AttributeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttributeUpdateInput, Prisma.AttributeUncheckedUpdateInput>;
};
export type AttributeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
    where: Prisma.AttributeWhereUniqueInput;
};
export type AttributeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttributeWhereInput;
    limit?: number;
};
export type Attribute$valuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttributeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttributeSelect<ExtArgs> | null;
    omit?: Prisma.AttributeOmit<ExtArgs> | null;
    include?: Prisma.AttributeInclude<ExtArgs> | null;
};
