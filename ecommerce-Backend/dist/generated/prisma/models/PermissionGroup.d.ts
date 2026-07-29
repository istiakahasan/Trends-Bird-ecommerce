import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PermissionGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$PermissionGroupPayload>;
export type AggregatePermissionGroup = {
    _count: PermissionGroupCountAggregateOutputType | null;
    _avg: PermissionGroupAvgAggregateOutputType | null;
    _sum: PermissionGroupSumAggregateOutputType | null;
    _min: PermissionGroupMinAggregateOutputType | null;
    _max: PermissionGroupMaxAggregateOutputType | null;
};
export type PermissionGroupAvgAggregateOutputType = {
    id: number | null;
};
export type PermissionGroupSumAggregateOutputType = {
    id: number | null;
};
export type PermissionGroupMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
};
export type PermissionGroupMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
};
export type PermissionGroupCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    _all: number;
};
export type PermissionGroupAvgAggregateInputType = {
    id?: true;
};
export type PermissionGroupSumAggregateInputType = {
    id?: true;
};
export type PermissionGroupMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type PermissionGroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type PermissionGroupCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type PermissionGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PermissionGroupWhereInput;
    orderBy?: Prisma.PermissionGroupOrderByWithRelationInput | Prisma.PermissionGroupOrderByWithRelationInput[];
    cursor?: Prisma.PermissionGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PermissionGroupCountAggregateInputType;
    _avg?: PermissionGroupAvgAggregateInputType;
    _sum?: PermissionGroupSumAggregateInputType;
    _min?: PermissionGroupMinAggregateInputType;
    _max?: PermissionGroupMaxAggregateInputType;
};
export type GetPermissionGroupAggregateType<T extends PermissionGroupAggregateArgs> = {
    [P in keyof T & keyof AggregatePermissionGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePermissionGroup[P]> : Prisma.GetScalarType<T[P], AggregatePermissionGroup[P]>;
};
export type PermissionGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PermissionGroupWhereInput;
    orderBy?: Prisma.PermissionGroupOrderByWithAggregationInput | Prisma.PermissionGroupOrderByWithAggregationInput[];
    by: Prisma.PermissionGroupScalarFieldEnum[] | Prisma.PermissionGroupScalarFieldEnum;
    having?: Prisma.PermissionGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PermissionGroupCountAggregateInputType | true;
    _avg?: PermissionGroupAvgAggregateInputType;
    _sum?: PermissionGroupSumAggregateInputType;
    _min?: PermissionGroupMinAggregateInputType;
    _max?: PermissionGroupMaxAggregateInputType;
};
export type PermissionGroupGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    _count: PermissionGroupCountAggregateOutputType | null;
    _avg: PermissionGroupAvgAggregateOutputType | null;
    _sum: PermissionGroupSumAggregateOutputType | null;
    _min: PermissionGroupMinAggregateOutputType | null;
    _max: PermissionGroupMaxAggregateOutputType | null;
};
export type GetPermissionGroupGroupByPayload<T extends PermissionGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PermissionGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PermissionGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PermissionGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PermissionGroupGroupByOutputType[P]>;
}>>;
export type PermissionGroupWhereInput = {
    AND?: Prisma.PermissionGroupWhereInput | Prisma.PermissionGroupWhereInput[];
    OR?: Prisma.PermissionGroupWhereInput[];
    NOT?: Prisma.PermissionGroupWhereInput | Prisma.PermissionGroupWhereInput[];
    id?: Prisma.IntFilter<"PermissionGroup"> | number;
    name?: Prisma.StringFilter<"PermissionGroup"> | string;
    description?: Prisma.StringNullableFilter<"PermissionGroup"> | string | null;
    permissions?: Prisma.PermissionListRelationFilter;
};
export type PermissionGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    permissions?: Prisma.PermissionOrderByRelationAggregateInput;
};
export type PermissionGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.PermissionGroupWhereInput | Prisma.PermissionGroupWhereInput[];
    OR?: Prisma.PermissionGroupWhereInput[];
    NOT?: Prisma.PermissionGroupWhereInput | Prisma.PermissionGroupWhereInput[];
    description?: Prisma.StringNullableFilter<"PermissionGroup"> | string | null;
    permissions?: Prisma.PermissionListRelationFilter;
}, "id" | "name">;
export type PermissionGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PermissionGroupCountOrderByAggregateInput;
    _avg?: Prisma.PermissionGroupAvgOrderByAggregateInput;
    _max?: Prisma.PermissionGroupMaxOrderByAggregateInput;
    _min?: Prisma.PermissionGroupMinOrderByAggregateInput;
    _sum?: Prisma.PermissionGroupSumOrderByAggregateInput;
};
export type PermissionGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.PermissionGroupScalarWhereWithAggregatesInput | Prisma.PermissionGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.PermissionGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PermissionGroupScalarWhereWithAggregatesInput | Prisma.PermissionGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PermissionGroup"> | number;
    name?: Prisma.StringWithAggregatesFilter<"PermissionGroup"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PermissionGroup"> | string | null;
};
export type PermissionGroupCreateInput = {
    name: string;
    description?: string | null;
    permissions?: Prisma.PermissionCreateNestedManyWithoutGroupInput;
};
export type PermissionGroupUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    permissions?: Prisma.PermissionUncheckedCreateNestedManyWithoutGroupInput;
};
export type PermissionGroupUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.PermissionUpdateManyWithoutGroupNestedInput;
};
export type PermissionGroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.PermissionUncheckedUpdateManyWithoutGroupNestedInput;
};
export type PermissionGroupCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
};
export type PermissionGroupUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PermissionGroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PermissionGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PermissionGroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PermissionGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PermissionGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PermissionGroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PermissionGroupScalarRelationFilter = {
    is?: Prisma.PermissionGroupWhereInput;
    isNot?: Prisma.PermissionGroupWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PermissionGroupCreateNestedOneWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.PermissionGroupCreateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.PermissionGroupCreateOrConnectWithoutPermissionsInput;
    connect?: Prisma.PermissionGroupWhereUniqueInput;
};
export type PermissionGroupUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.PermissionGroupCreateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.PermissionGroupCreateOrConnectWithoutPermissionsInput;
    upsert?: Prisma.PermissionGroupUpsertWithoutPermissionsInput;
    connect?: Prisma.PermissionGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PermissionGroupUpdateToOneWithWhereWithoutPermissionsInput, Prisma.PermissionGroupUpdateWithoutPermissionsInput>, Prisma.PermissionGroupUncheckedUpdateWithoutPermissionsInput>;
};
export type PermissionGroupCreateWithoutPermissionsInput = {
    name: string;
    description?: string | null;
};
export type PermissionGroupUncheckedCreateWithoutPermissionsInput = {
    id?: number;
    name: string;
    description?: string | null;
};
export type PermissionGroupCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.PermissionGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PermissionGroupCreateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedCreateWithoutPermissionsInput>;
};
export type PermissionGroupUpsertWithoutPermissionsInput = {
    update: Prisma.XOR<Prisma.PermissionGroupUpdateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.PermissionGroupCreateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedCreateWithoutPermissionsInput>;
    where?: Prisma.PermissionGroupWhereInput;
};
export type PermissionGroupUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: Prisma.PermissionGroupWhereInput;
    data: Prisma.XOR<Prisma.PermissionGroupUpdateWithoutPermissionsInput, Prisma.PermissionGroupUncheckedUpdateWithoutPermissionsInput>;
};
export type PermissionGroupUpdateWithoutPermissionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PermissionGroupUncheckedUpdateWithoutPermissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PermissionGroupCountOutputType = {
    permissions: number;
};
export type PermissionGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | PermissionGroupCountOutputTypeCountPermissionsArgs;
};
export type PermissionGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type PermissionGroupCountOutputTypeCountPermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PermissionWhereInput;
};
export type PermissionGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    permissions?: boolean | Prisma.PermissionGroup$permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permissionGroup"]>;
export type PermissionGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["permissionGroup"]>;
export type PermissionGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["permissionGroup"]>;
export type PermissionGroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
};
export type PermissionGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["permissionGroup"]>;
export type PermissionGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.PermissionGroup$permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PermissionGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PermissionGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PermissionGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PermissionGroup";
    objects: {
        permissions: Prisma.$PermissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
    }, ExtArgs["result"]["permissionGroup"]>;
    composites: {};
};
export type PermissionGroupGetPayload<S extends boolean | null | undefined | PermissionGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload, S>;
export type PermissionGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PermissionGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PermissionGroupCountAggregateInputType | true;
};
export interface PermissionGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PermissionGroup'];
        meta: {
            name: 'PermissionGroup';
        };
    };
    findUnique<T extends PermissionGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, PermissionGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PermissionGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PermissionGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PermissionGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, PermissionGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PermissionGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PermissionGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PermissionGroupFindManyArgs>(args?: Prisma.SelectSubset<T, PermissionGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PermissionGroupCreateArgs>(args: Prisma.SelectSubset<T, PermissionGroupCreateArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PermissionGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, PermissionGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PermissionGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PermissionGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PermissionGroupDeleteArgs>(args: Prisma.SelectSubset<T, PermissionGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PermissionGroupUpdateArgs>(args: Prisma.SelectSubset<T, PermissionGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PermissionGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, PermissionGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PermissionGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, PermissionGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PermissionGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PermissionGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PermissionGroupUpsertArgs>(args: Prisma.SelectSubset<T, PermissionGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__PermissionGroupClient<runtime.Types.Result.GetResult<Prisma.$PermissionGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PermissionGroupCountArgs>(args?: Prisma.Subset<T, PermissionGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PermissionGroupCountAggregateOutputType> : number>;
    aggregate<T extends PermissionGroupAggregateArgs>(args: Prisma.Subset<T, PermissionGroupAggregateArgs>): Prisma.PrismaPromise<GetPermissionGroupAggregateType<T>>;
    groupBy<T extends PermissionGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PermissionGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: PermissionGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PermissionGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PermissionGroupFieldRefs;
}
export interface Prisma__PermissionGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permissions<T extends Prisma.PermissionGroup$permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PermissionGroup$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PermissionGroupFieldRefs {
    readonly id: Prisma.FieldRef<"PermissionGroup", 'Int'>;
    readonly name: Prisma.FieldRef<"PermissionGroup", 'String'>;
    readonly description: Prisma.FieldRef<"PermissionGroup", 'String'>;
}
export type PermissionGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where: Prisma.PermissionGroupWhereUniqueInput;
};
export type PermissionGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where: Prisma.PermissionGroupWhereUniqueInput;
};
export type PermissionGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where?: Prisma.PermissionGroupWhereInput;
    orderBy?: Prisma.PermissionGroupOrderByWithRelationInput | Prisma.PermissionGroupOrderByWithRelationInput[];
    cursor?: Prisma.PermissionGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionGroupScalarFieldEnum | Prisma.PermissionGroupScalarFieldEnum[];
};
export type PermissionGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where?: Prisma.PermissionGroupWhereInput;
    orderBy?: Prisma.PermissionGroupOrderByWithRelationInput | Prisma.PermissionGroupOrderByWithRelationInput[];
    cursor?: Prisma.PermissionGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionGroupScalarFieldEnum | Prisma.PermissionGroupScalarFieldEnum[];
};
export type PermissionGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where?: Prisma.PermissionGroupWhereInput;
    orderBy?: Prisma.PermissionGroupOrderByWithRelationInput | Prisma.PermissionGroupOrderByWithRelationInput[];
    cursor?: Prisma.PermissionGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionGroupScalarFieldEnum | Prisma.PermissionGroupScalarFieldEnum[];
};
export type PermissionGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PermissionGroupCreateInput, Prisma.PermissionGroupUncheckedCreateInput>;
};
export type PermissionGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PermissionGroupCreateManyInput | Prisma.PermissionGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PermissionGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    data: Prisma.PermissionGroupCreateManyInput | Prisma.PermissionGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PermissionGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PermissionGroupUpdateInput, Prisma.PermissionGroupUncheckedUpdateInput>;
    where: Prisma.PermissionGroupWhereUniqueInput;
};
export type PermissionGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PermissionGroupUpdateManyMutationInput, Prisma.PermissionGroupUncheckedUpdateManyInput>;
    where?: Prisma.PermissionGroupWhereInput;
    limit?: number;
};
export type PermissionGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PermissionGroupUpdateManyMutationInput, Prisma.PermissionGroupUncheckedUpdateManyInput>;
    where?: Prisma.PermissionGroupWhereInput;
    limit?: number;
};
export type PermissionGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where: Prisma.PermissionGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PermissionGroupCreateInput, Prisma.PermissionGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PermissionGroupUpdateInput, Prisma.PermissionGroupUncheckedUpdateInput>;
};
export type PermissionGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
    where: Prisma.PermissionGroupWhereUniqueInput;
};
export type PermissionGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PermissionGroupWhereInput;
    limit?: number;
};
export type PermissionGroup$permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionSelect<ExtArgs> | null;
    omit?: Prisma.PermissionOmit<ExtArgs> | null;
    include?: Prisma.PermissionInclude<ExtArgs> | null;
    where?: Prisma.PermissionWhereInput;
    orderBy?: Prisma.PermissionOrderByWithRelationInput | Prisma.PermissionOrderByWithRelationInput[];
    cursor?: Prisma.PermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
export type PermissionGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionGroupSelect<ExtArgs> | null;
    omit?: Prisma.PermissionGroupOmit<ExtArgs> | null;
    include?: Prisma.PermissionGroupInclude<ExtArgs> | null;
};
