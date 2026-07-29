import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MediaModel = runtime.Types.Result.DefaultSelection<Prisma.$MediaPayload>;
export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null;
    _avg: MediaAvgAggregateOutputType | null;
    _sum: MediaSumAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
};
export type MediaAvgAggregateOutputType = {
    id: number | null;
};
export type MediaSumAggregateOutputType = {
    id: number | null;
};
export type MediaMinAggregateOutputType = {
    id: number | null;
    url: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type MediaMaxAggregateOutputType = {
    id: number | null;
    url: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type MediaCountAggregateOutputType = {
    id: number;
    url: number;
    type: number;
    createdAt: number;
    _all: number;
};
export type MediaAvgAggregateInputType = {
    id?: true;
};
export type MediaSumAggregateInputType = {
    id?: true;
};
export type MediaMinAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    createdAt?: true;
};
export type MediaMaxAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    createdAt?: true;
};
export type MediaCountAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
};
export type MediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaWhereInput;
    orderBy?: Prisma.MediaOrderByWithRelationInput | Prisma.MediaOrderByWithRelationInput[];
    cursor?: Prisma.MediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MediaCountAggregateInputType;
    _avg?: MediaAvgAggregateInputType;
    _sum?: MediaSumAggregateInputType;
    _min?: MediaMinAggregateInputType;
    _max?: MediaMaxAggregateInputType;
};
export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
    [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedia[P]> : Prisma.GetScalarType<T[P], AggregateMedia[P]>;
};
export type MediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaWhereInput;
    orderBy?: Prisma.MediaOrderByWithAggregationInput | Prisma.MediaOrderByWithAggregationInput[];
    by: Prisma.MediaScalarFieldEnum[] | Prisma.MediaScalarFieldEnum;
    having?: Prisma.MediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MediaCountAggregateInputType | true;
    _avg?: MediaAvgAggregateInputType;
    _sum?: MediaSumAggregateInputType;
    _min?: MediaMinAggregateInputType;
    _max?: MediaMaxAggregateInputType;
};
export type MediaGroupByOutputType = {
    id: number;
    url: string;
    type: string;
    createdAt: Date;
    _count: MediaCountAggregateOutputType | null;
    _avg: MediaAvgAggregateOutputType | null;
    _sum: MediaSumAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
};
export type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MediaGroupByOutputType[P]>;
}>>;
export type MediaWhereInput = {
    AND?: Prisma.MediaWhereInput | Prisma.MediaWhereInput[];
    OR?: Prisma.MediaWhereInput[];
    NOT?: Prisma.MediaWhereInput | Prisma.MediaWhereInput[];
    id?: Prisma.IntFilter<"Media"> | number;
    url?: Prisma.StringFilter<"Media"> | string;
    type?: Prisma.StringFilter<"Media"> | string;
    createdAt?: Prisma.DateTimeFilter<"Media"> | Date | string;
    products?: Prisma.ProductListRelationFilter;
};
export type MediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    products?: Prisma.ProductOrderByRelationAggregateInput;
};
export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MediaWhereInput | Prisma.MediaWhereInput[];
    OR?: Prisma.MediaWhereInput[];
    NOT?: Prisma.MediaWhereInput | Prisma.MediaWhereInput[];
    url?: Prisma.StringFilter<"Media"> | string;
    type?: Prisma.StringFilter<"Media"> | string;
    createdAt?: Prisma.DateTimeFilter<"Media"> | Date | string;
    products?: Prisma.ProductListRelationFilter;
}, "id">;
export type MediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MediaCountOrderByAggregateInput;
    _avg?: Prisma.MediaAvgOrderByAggregateInput;
    _max?: Prisma.MediaMaxOrderByAggregateInput;
    _min?: Prisma.MediaMinOrderByAggregateInput;
    _sum?: Prisma.MediaSumOrderByAggregateInput;
};
export type MediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.MediaScalarWhereWithAggregatesInput | Prisma.MediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.MediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MediaScalarWhereWithAggregatesInput | Prisma.MediaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Media"> | number;
    url?: Prisma.StringWithAggregatesFilter<"Media"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Media"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Media"> | Date | string;
};
export type MediaCreateInput = {
    url: string;
    type: string;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutMediaInput;
};
export type MediaUncheckedCreateInput = {
    id?: number;
    url: string;
    type: string;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMediaInput;
};
export type MediaUpdateInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutMediaNestedInput;
};
export type MediaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMediaNestedInput;
};
export type MediaCreateManyInput = {
    id?: number;
    url: string;
    type: string;
    createdAt?: Date | string;
};
export type MediaUpdateManyMutationInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MediaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MediaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MediaListRelationFilter = {
    every?: Prisma.MediaWhereInput;
    some?: Prisma.MediaWhereInput;
    none?: Prisma.MediaWhereInput;
};
export type MediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MediaCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput> | Prisma.MediaCreateWithoutProductsInput[] | Prisma.MediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.MediaCreateOrConnectWithoutProductsInput | Prisma.MediaCreateOrConnectWithoutProductsInput[];
    connect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
};
export type MediaUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput> | Prisma.MediaCreateWithoutProductsInput[] | Prisma.MediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.MediaCreateOrConnectWithoutProductsInput | Prisma.MediaCreateOrConnectWithoutProductsInput[];
    connect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
};
export type MediaUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput> | Prisma.MediaCreateWithoutProductsInput[] | Prisma.MediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.MediaCreateOrConnectWithoutProductsInput | Prisma.MediaCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.MediaUpsertWithWhereUniqueWithoutProductsInput | Prisma.MediaUpsertWithWhereUniqueWithoutProductsInput[];
    set?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    disconnect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    delete?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    connect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    update?: Prisma.MediaUpdateWithWhereUniqueWithoutProductsInput | Prisma.MediaUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.MediaUpdateManyWithWhereWithoutProductsInput | Prisma.MediaUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.MediaScalarWhereInput | Prisma.MediaScalarWhereInput[];
};
export type MediaUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput> | Prisma.MediaCreateWithoutProductsInput[] | Prisma.MediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.MediaCreateOrConnectWithoutProductsInput | Prisma.MediaCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.MediaUpsertWithWhereUniqueWithoutProductsInput | Prisma.MediaUpsertWithWhereUniqueWithoutProductsInput[];
    set?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    disconnect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    delete?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    connect?: Prisma.MediaWhereUniqueInput | Prisma.MediaWhereUniqueInput[];
    update?: Prisma.MediaUpdateWithWhereUniqueWithoutProductsInput | Prisma.MediaUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.MediaUpdateManyWithWhereWithoutProductsInput | Prisma.MediaUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.MediaScalarWhereInput | Prisma.MediaScalarWhereInput[];
};
export type MediaCreateWithoutProductsInput = {
    url: string;
    type: string;
    createdAt?: Date | string;
};
export type MediaUncheckedCreateWithoutProductsInput = {
    id?: number;
    url: string;
    type: string;
    createdAt?: Date | string;
};
export type MediaCreateOrConnectWithoutProductsInput = {
    where: Prisma.MediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput>;
};
export type MediaUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.MediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.MediaUpdateWithoutProductsInput, Prisma.MediaUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.MediaCreateWithoutProductsInput, Prisma.MediaUncheckedCreateWithoutProductsInput>;
};
export type MediaUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.MediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.MediaUpdateWithoutProductsInput, Prisma.MediaUncheckedUpdateWithoutProductsInput>;
};
export type MediaUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.MediaScalarWhereInput;
    data: Prisma.XOR<Prisma.MediaUpdateManyMutationInput, Prisma.MediaUncheckedUpdateManyWithoutProductsInput>;
};
export type MediaScalarWhereInput = {
    AND?: Prisma.MediaScalarWhereInput | Prisma.MediaScalarWhereInput[];
    OR?: Prisma.MediaScalarWhereInput[];
    NOT?: Prisma.MediaScalarWhereInput | Prisma.MediaScalarWhereInput[];
    id?: Prisma.IntFilter<"Media"> | number;
    url?: Prisma.StringFilter<"Media"> | string;
    type?: Prisma.StringFilter<"Media"> | string;
    createdAt?: Prisma.DateTimeFilter<"Media"> | Date | string;
};
export type MediaUpdateWithoutProductsInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaUncheckedUpdateManyWithoutProductsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaCountOutputType = {
    products: number;
};
export type MediaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | MediaCountOutputTypeCountProductsArgs;
};
export type MediaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaCountOutputTypeSelect<ExtArgs> | null;
};
export type MediaCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type MediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    type?: boolean;
    createdAt?: boolean;
    products?: boolean | Prisma.Media$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.MediaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["media"]>;
export type MediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    type?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["media"]>;
export type MediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    type?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["media"]>;
export type MediaSelectScalar = {
    id?: boolean;
    url?: boolean;
    type?: boolean;
    createdAt?: boolean;
};
export type MediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "url" | "type" | "createdAt", ExtArgs["result"]["media"]>;
export type MediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.Media$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.MediaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Media";
    objects: {
        products: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        url: string;
        type: string;
        createdAt: Date;
    }, ExtArgs["result"]["media"]>;
    composites: {};
};
export type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MediaPayload, S>;
export type MediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MediaCountAggregateInputType | true;
};
export interface MediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Media'];
        meta: {
            name: 'Media';
        };
    };
    findUnique<T extends MediaFindUniqueArgs>(args: Prisma.SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MediaFindFirstArgs>(args?: Prisma.SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MediaFindManyArgs>(args?: Prisma.SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MediaCreateArgs>(args: Prisma.SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MediaCreateManyArgs>(args?: Prisma.SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MediaDeleteArgs>(args: Prisma.SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MediaUpdateArgs>(args: Prisma.SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MediaUpdateManyArgs>(args: Prisma.SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MediaUpsertArgs>(args: Prisma.SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma.Prisma__MediaClient<runtime.Types.Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MediaCountArgs>(args?: Prisma.Subset<T, MediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MediaCountAggregateOutputType> : number>;
    aggregate<T extends MediaAggregateArgs>(args: Prisma.Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>;
    groupBy<T extends MediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MediaGroupByArgs['orderBy'];
    } : {
        orderBy?: MediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MediaFieldRefs;
}
export interface Prisma__MediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.Media$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Media$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MediaFieldRefs {
    readonly id: Prisma.FieldRef<"Media", 'Int'>;
    readonly url: Prisma.FieldRef<"Media", 'String'>;
    readonly type: Prisma.FieldRef<"Media", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Media", 'DateTime'>;
}
export type MediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    where: Prisma.MediaWhereUniqueInput;
};
export type MediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    where: Prisma.MediaWhereUniqueInput;
};
export type MediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaCreateInput, Prisma.MediaUncheckedCreateInput>;
};
export type MediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MediaCreateManyInput | Prisma.MediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    data: Prisma.MediaCreateManyInput | Prisma.MediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaUpdateInput, Prisma.MediaUncheckedUpdateInput>;
    where: Prisma.MediaWhereUniqueInput;
};
export type MediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MediaUpdateManyMutationInput, Prisma.MediaUncheckedUpdateManyInput>;
    where?: Prisma.MediaWhereInput;
    limit?: number;
};
export type MediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaUpdateManyMutationInput, Prisma.MediaUncheckedUpdateManyInput>;
    where?: Prisma.MediaWhereInput;
    limit?: number;
};
export type MediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    where: Prisma.MediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MediaCreateInput, Prisma.MediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MediaUpdateInput, Prisma.MediaUncheckedUpdateInput>;
};
export type MediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
    where: Prisma.MediaWhereUniqueInput;
};
export type MediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaWhereInput;
    limit?: number;
};
export type Media$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaSelect<ExtArgs> | null;
    omit?: Prisma.MediaOmit<ExtArgs> | null;
    include?: Prisma.MediaInclude<ExtArgs> | null;
};
