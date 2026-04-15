import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model UserAlat
 *
 */
export type UserAlatModel = runtime.Types.Result.DefaultSelection<Prisma.$UserAlatPayload>;
export type AggregateUserAlat = {
    _count: UserAlatCountAggregateOutputType | null;
    _min: UserAlatMinAggregateOutputType | null;
    _max: UserAlatMaxAggregateOutputType | null;
};
export type UserAlatMinAggregateOutputType = {
    userId: string | null;
    alatId: string | null;
};
export type UserAlatMaxAggregateOutputType = {
    userId: string | null;
    alatId: string | null;
};
export type UserAlatCountAggregateOutputType = {
    userId: number;
    alatId: number;
    _all: number;
};
export type UserAlatMinAggregateInputType = {
    userId?: true;
    alatId?: true;
};
export type UserAlatMaxAggregateInputType = {
    userId?: true;
    alatId?: true;
};
export type UserAlatCountAggregateInputType = {
    userId?: true;
    alatId?: true;
    _all?: true;
};
export type UserAlatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserAlat to aggregate.
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAlats to fetch.
     */
    orderBy?: Prisma.UserAlatOrderByWithRelationInput | Prisma.UserAlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserAlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAlats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAlats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserAlats
    **/
    _count?: true | UserAlatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserAlatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserAlatMaxAggregateInputType;
};
export type GetUserAlatAggregateType<T extends UserAlatAggregateArgs> = {
    [P in keyof T & keyof AggregateUserAlat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserAlat[P]> : Prisma.GetScalarType<T[P], AggregateUserAlat[P]>;
};
export type UserAlatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAlatWhereInput;
    orderBy?: Prisma.UserAlatOrderByWithAggregationInput | Prisma.UserAlatOrderByWithAggregationInput[];
    by: Prisma.UserAlatScalarFieldEnum[] | Prisma.UserAlatScalarFieldEnum;
    having?: Prisma.UserAlatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserAlatCountAggregateInputType | true;
    _min?: UserAlatMinAggregateInputType;
    _max?: UserAlatMaxAggregateInputType;
};
export type UserAlatGroupByOutputType = {
    userId: string;
    alatId: string;
    _count: UserAlatCountAggregateOutputType | null;
    _min: UserAlatMinAggregateOutputType | null;
    _max: UserAlatMaxAggregateOutputType | null;
};
export type GetUserAlatGroupByPayload<T extends UserAlatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserAlatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserAlatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserAlatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserAlatGroupByOutputType[P]>;
}>>;
export type UserAlatWhereInput = {
    AND?: Prisma.UserAlatWhereInput | Prisma.UserAlatWhereInput[];
    OR?: Prisma.UserAlatWhereInput[];
    NOT?: Prisma.UserAlatWhereInput | Prisma.UserAlatWhereInput[];
    userId?: Prisma.StringFilter<"UserAlat"> | string;
    alatId?: Prisma.StringFilter<"UserAlat"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    alat?: Prisma.XOR<Prisma.AlatScalarRelationFilter, Prisma.AlatWhereInput>;
};
export type UserAlatOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    alat?: Prisma.AlatOrderByWithRelationInput;
};
export type UserAlatWhereUniqueInput = Prisma.AtLeast<{
    userId_alatId?: Prisma.UserAlatUserIdAlatIdCompoundUniqueInput;
    AND?: Prisma.UserAlatWhereInput | Prisma.UserAlatWhereInput[];
    OR?: Prisma.UserAlatWhereInput[];
    NOT?: Prisma.UserAlatWhereInput | Prisma.UserAlatWhereInput[];
    userId?: Prisma.StringFilter<"UserAlat"> | string;
    alatId?: Prisma.StringFilter<"UserAlat"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    alat?: Prisma.XOR<Prisma.AlatScalarRelationFilter, Prisma.AlatWhereInput>;
}, "userId_alatId">;
export type UserAlatOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    _count?: Prisma.UserAlatCountOrderByAggregateInput;
    _max?: Prisma.UserAlatMaxOrderByAggregateInput;
    _min?: Prisma.UserAlatMinOrderByAggregateInput;
};
export type UserAlatScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserAlatScalarWhereWithAggregatesInput | Prisma.UserAlatScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserAlatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserAlatScalarWhereWithAggregatesInput | Prisma.UserAlatScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"UserAlat"> | string;
    alatId?: Prisma.StringWithAggregatesFilter<"UserAlat"> | string;
};
export type UserAlatCreateInput = {
    user: Prisma.UserCreateNestedOneWithoutUserAlatsInput;
    alat: Prisma.AlatCreateNestedOneWithoutUserAlatsInput;
};
export type UserAlatUncheckedCreateInput = {
    userId: string;
    alatId: string;
};
export type UserAlatUpdateInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutUserAlatsNestedInput;
    alat?: Prisma.AlatUpdateOneRequiredWithoutUserAlatsNestedInput;
};
export type UserAlatUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatCreateManyInput = {
    userId: string;
    alatId: string;
};
export type UserAlatUpdateManyMutationInput = {};
export type UserAlatUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatListRelationFilter = {
    every?: Prisma.UserAlatWhereInput;
    some?: Prisma.UserAlatWhereInput;
    none?: Prisma.UserAlatWhereInput;
};
export type UserAlatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserAlatUserIdAlatIdCompoundUniqueInput = {
    userId: string;
    alatId: string;
};
export type UserAlatCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
};
export type UserAlatMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
};
export type UserAlatMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
};
export type UserAlatCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput> | Prisma.UserAlatCreateWithoutUserInput[] | Prisma.UserAlatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutUserInput | Prisma.UserAlatCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserAlatCreateManyUserInputEnvelope;
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
};
export type UserAlatUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput> | Prisma.UserAlatCreateWithoutUserInput[] | Prisma.UserAlatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutUserInput | Prisma.UserAlatCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserAlatCreateManyUserInputEnvelope;
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
};
export type UserAlatUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput> | Prisma.UserAlatCreateWithoutUserInput[] | Prisma.UserAlatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutUserInput | Prisma.UserAlatCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserAlatUpsertWithWhereUniqueWithoutUserInput | Prisma.UserAlatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserAlatCreateManyUserInputEnvelope;
    set?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    disconnect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    delete?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    update?: Prisma.UserAlatUpdateWithWhereUniqueWithoutUserInput | Prisma.UserAlatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserAlatUpdateManyWithWhereWithoutUserInput | Prisma.UserAlatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
};
export type UserAlatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput> | Prisma.UserAlatCreateWithoutUserInput[] | Prisma.UserAlatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutUserInput | Prisma.UserAlatCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserAlatUpsertWithWhereUniqueWithoutUserInput | Prisma.UserAlatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserAlatCreateManyUserInputEnvelope;
    set?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    disconnect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    delete?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    update?: Prisma.UserAlatUpdateWithWhereUniqueWithoutUserInput | Prisma.UserAlatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserAlatUpdateManyWithWhereWithoutUserInput | Prisma.UserAlatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
};
export type UserAlatCreateNestedManyWithoutAlatInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput> | Prisma.UserAlatCreateWithoutAlatInput[] | Prisma.UserAlatUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutAlatInput | Prisma.UserAlatCreateOrConnectWithoutAlatInput[];
    createMany?: Prisma.UserAlatCreateManyAlatInputEnvelope;
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
};
export type UserAlatUncheckedCreateNestedManyWithoutAlatInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput> | Prisma.UserAlatCreateWithoutAlatInput[] | Prisma.UserAlatUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutAlatInput | Prisma.UserAlatCreateOrConnectWithoutAlatInput[];
    createMany?: Prisma.UserAlatCreateManyAlatInputEnvelope;
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
};
export type UserAlatUpdateManyWithoutAlatNestedInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput> | Prisma.UserAlatCreateWithoutAlatInput[] | Prisma.UserAlatUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutAlatInput | Prisma.UserAlatCreateOrConnectWithoutAlatInput[];
    upsert?: Prisma.UserAlatUpsertWithWhereUniqueWithoutAlatInput | Prisma.UserAlatUpsertWithWhereUniqueWithoutAlatInput[];
    createMany?: Prisma.UserAlatCreateManyAlatInputEnvelope;
    set?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    disconnect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    delete?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    update?: Prisma.UserAlatUpdateWithWhereUniqueWithoutAlatInput | Prisma.UserAlatUpdateWithWhereUniqueWithoutAlatInput[];
    updateMany?: Prisma.UserAlatUpdateManyWithWhereWithoutAlatInput | Prisma.UserAlatUpdateManyWithWhereWithoutAlatInput[];
    deleteMany?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
};
export type UserAlatUncheckedUpdateManyWithoutAlatNestedInput = {
    create?: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput> | Prisma.UserAlatCreateWithoutAlatInput[] | Prisma.UserAlatUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.UserAlatCreateOrConnectWithoutAlatInput | Prisma.UserAlatCreateOrConnectWithoutAlatInput[];
    upsert?: Prisma.UserAlatUpsertWithWhereUniqueWithoutAlatInput | Prisma.UserAlatUpsertWithWhereUniqueWithoutAlatInput[];
    createMany?: Prisma.UserAlatCreateManyAlatInputEnvelope;
    set?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    disconnect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    delete?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    connect?: Prisma.UserAlatWhereUniqueInput | Prisma.UserAlatWhereUniqueInput[];
    update?: Prisma.UserAlatUpdateWithWhereUniqueWithoutAlatInput | Prisma.UserAlatUpdateWithWhereUniqueWithoutAlatInput[];
    updateMany?: Prisma.UserAlatUpdateManyWithWhereWithoutAlatInput | Prisma.UserAlatUpdateManyWithWhereWithoutAlatInput[];
    deleteMany?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
};
export type UserAlatCreateWithoutUserInput = {
    alat: Prisma.AlatCreateNestedOneWithoutUserAlatsInput;
};
export type UserAlatUncheckedCreateWithoutUserInput = {
    alatId: string;
};
export type UserAlatCreateOrConnectWithoutUserInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput>;
};
export type UserAlatCreateManyUserInputEnvelope = {
    data: Prisma.UserAlatCreateManyUserInput | Prisma.UserAlatCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserAlatUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserAlatUpdateWithoutUserInput, Prisma.UserAlatUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserAlatCreateWithoutUserInput, Prisma.UserAlatUncheckedCreateWithoutUserInput>;
};
export type UserAlatUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserAlatUpdateWithoutUserInput, Prisma.UserAlatUncheckedUpdateWithoutUserInput>;
};
export type UserAlatUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserAlatScalarWhereInput;
    data: Prisma.XOR<Prisma.UserAlatUpdateManyMutationInput, Prisma.UserAlatUncheckedUpdateManyWithoutUserInput>;
};
export type UserAlatScalarWhereInput = {
    AND?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
    OR?: Prisma.UserAlatScalarWhereInput[];
    NOT?: Prisma.UserAlatScalarWhereInput | Prisma.UserAlatScalarWhereInput[];
    userId?: Prisma.StringFilter<"UserAlat"> | string;
    alatId?: Prisma.StringFilter<"UserAlat"> | string;
};
export type UserAlatCreateWithoutAlatInput = {
    user: Prisma.UserCreateNestedOneWithoutUserAlatsInput;
};
export type UserAlatUncheckedCreateWithoutAlatInput = {
    userId: string;
};
export type UserAlatCreateOrConnectWithoutAlatInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput>;
};
export type UserAlatCreateManyAlatInputEnvelope = {
    data: Prisma.UserAlatCreateManyAlatInput | Prisma.UserAlatCreateManyAlatInput[];
    skipDuplicates?: boolean;
};
export type UserAlatUpsertWithWhereUniqueWithoutAlatInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserAlatUpdateWithoutAlatInput, Prisma.UserAlatUncheckedUpdateWithoutAlatInput>;
    create: Prisma.XOR<Prisma.UserAlatCreateWithoutAlatInput, Prisma.UserAlatUncheckedCreateWithoutAlatInput>;
};
export type UserAlatUpdateWithWhereUniqueWithoutAlatInput = {
    where: Prisma.UserAlatWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserAlatUpdateWithoutAlatInput, Prisma.UserAlatUncheckedUpdateWithoutAlatInput>;
};
export type UserAlatUpdateManyWithWhereWithoutAlatInput = {
    where: Prisma.UserAlatScalarWhereInput;
    data: Prisma.XOR<Prisma.UserAlatUpdateManyMutationInput, Prisma.UserAlatUncheckedUpdateManyWithoutAlatInput>;
};
export type UserAlatCreateManyUserInput = {
    alatId: string;
};
export type UserAlatUpdateWithoutUserInput = {
    alat?: Prisma.AlatUpdateOneRequiredWithoutUserAlatsNestedInput;
};
export type UserAlatUncheckedUpdateWithoutUserInput = {
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatUncheckedUpdateManyWithoutUserInput = {
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatCreateManyAlatInput = {
    userId: string;
};
export type UserAlatUpdateWithoutAlatInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutUserAlatsNestedInput;
};
export type UserAlatUncheckedUpdateWithoutAlatInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatUncheckedUpdateManyWithoutAlatInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserAlatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    alatId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAlat"]>;
export type UserAlatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    alatId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAlat"]>;
export type UserAlatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    alatId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userAlat"]>;
export type UserAlatSelectScalar = {
    userId?: boolean;
    alatId?: boolean;
};
export type UserAlatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "alatId", ExtArgs["result"]["userAlat"]>;
export type UserAlatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type UserAlatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type UserAlatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type $UserAlatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserAlat";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        alat: Prisma.$AlatPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        alatId: string;
    }, ExtArgs["result"]["userAlat"]>;
    composites: {};
};
export type UserAlatGetPayload<S extends boolean | null | undefined | UserAlatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserAlatPayload, S>;
export type UserAlatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserAlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserAlatCountAggregateInputType | true;
};
export interface UserAlatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserAlat'];
        meta: {
            name: 'UserAlat';
        };
    };
    /**
     * Find zero or one UserAlat that matches the filter.
     * @param {UserAlatFindUniqueArgs} args - Arguments to find a UserAlat
     * @example
     * // Get one UserAlat
     * const userAlat = await prisma.userAlat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAlatFindUniqueArgs>(args: Prisma.SelectSubset<T, UserAlatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserAlat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAlatFindUniqueOrThrowArgs} args - Arguments to find a UserAlat
     * @example
     * // Get one UserAlat
     * const userAlat = await prisma.userAlat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAlatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserAlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserAlat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatFindFirstArgs} args - Arguments to find a UserAlat
     * @example
     * // Get one UserAlat
     * const userAlat = await prisma.userAlat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAlatFindFirstArgs>(args?: Prisma.SelectSubset<T, UserAlatFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserAlat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatFindFirstOrThrowArgs} args - Arguments to find a UserAlat
     * @example
     * // Get one UserAlat
     * const userAlat = await prisma.userAlat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAlatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserAlatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserAlats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAlats
     * const userAlats = await prisma.userAlat.findMany()
     *
     * // Get first 10 UserAlats
     * const userAlats = await prisma.userAlat.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userAlatWithUserIdOnly = await prisma.userAlat.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends UserAlatFindManyArgs>(args?: Prisma.SelectSubset<T, UserAlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserAlat.
     * @param {UserAlatCreateArgs} args - Arguments to create a UserAlat.
     * @example
     * // Create one UserAlat
     * const UserAlat = await prisma.userAlat.create({
     *   data: {
     *     // ... data to create a UserAlat
     *   }
     * })
     *
     */
    create<T extends UserAlatCreateArgs>(args: Prisma.SelectSubset<T, UserAlatCreateArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserAlats.
     * @param {UserAlatCreateManyArgs} args - Arguments to create many UserAlats.
     * @example
     * // Create many UserAlats
     * const userAlat = await prisma.userAlat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserAlatCreateManyArgs>(args?: Prisma.SelectSubset<T, UserAlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserAlats and returns the data saved in the database.
     * @param {UserAlatCreateManyAndReturnArgs} args - Arguments to create many UserAlats.
     * @example
     * // Create many UserAlats
     * const userAlat = await prisma.userAlat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserAlats and only return the `userId`
     * const userAlatWithUserIdOnly = await prisma.userAlat.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserAlatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserAlatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserAlat.
     * @param {UserAlatDeleteArgs} args - Arguments to delete one UserAlat.
     * @example
     * // Delete one UserAlat
     * const UserAlat = await prisma.userAlat.delete({
     *   where: {
     *     // ... filter to delete one UserAlat
     *   }
     * })
     *
     */
    delete<T extends UserAlatDeleteArgs>(args: Prisma.SelectSubset<T, UserAlatDeleteArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserAlat.
     * @param {UserAlatUpdateArgs} args - Arguments to update one UserAlat.
     * @example
     * // Update one UserAlat
     * const userAlat = await prisma.userAlat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserAlatUpdateArgs>(args: Prisma.SelectSubset<T, UserAlatUpdateArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserAlats.
     * @param {UserAlatDeleteManyArgs} args - Arguments to filter UserAlats to delete.
     * @example
     * // Delete a few UserAlats
     * const { count } = await prisma.userAlat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserAlatDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserAlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserAlats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAlats
     * const userAlat = await prisma.userAlat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserAlatUpdateManyArgs>(args: Prisma.SelectSubset<T, UserAlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserAlats and returns the data updated in the database.
     * @param {UserAlatUpdateManyAndReturnArgs} args - Arguments to update many UserAlats.
     * @example
     * // Update many UserAlats
     * const userAlat = await prisma.userAlat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserAlats and only return the `userId`
     * const userAlatWithUserIdOnly = await prisma.userAlat.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserAlatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserAlatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserAlat.
     * @param {UserAlatUpsertArgs} args - Arguments to update or create a UserAlat.
     * @example
     * // Update or create a UserAlat
     * const userAlat = await prisma.userAlat.upsert({
     *   create: {
     *     // ... data to create a UserAlat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAlat we want to update
     *   }
     * })
     */
    upsert<T extends UserAlatUpsertArgs>(args: Prisma.SelectSubset<T, UserAlatUpsertArgs<ExtArgs>>): Prisma.Prisma__UserAlatClient<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserAlats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatCountArgs} args - Arguments to filter UserAlats to count.
     * @example
     * // Count the number of UserAlats
     * const count = await prisma.userAlat.count({
     *   where: {
     *     // ... the filter for the UserAlats we want to count
     *   }
     * })
    **/
    count<T extends UserAlatCountArgs>(args?: Prisma.Subset<T, UserAlatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserAlatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserAlat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAlatAggregateArgs>(args: Prisma.Subset<T, UserAlatAggregateArgs>): Prisma.PrismaPromise<GetUserAlatAggregateType<T>>;
    /**
     * Group by UserAlat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserAlatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserAlatGroupByArgs['orderBy'];
    } : {
        orderBy?: UserAlatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserAlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserAlat model
     */
    readonly fields: UserAlatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserAlat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserAlatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    alat<T extends Prisma.AlatDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlatDefaultArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the UserAlat model
 */
export interface UserAlatFieldRefs {
    readonly userId: Prisma.FieldRef<"UserAlat", 'String'>;
    readonly alatId: Prisma.FieldRef<"UserAlat", 'String'>;
}
/**
 * UserAlat findUnique
 */
export type UserAlatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter, which UserAlat to fetch.
     */
    where: Prisma.UserAlatWhereUniqueInput;
};
/**
 * UserAlat findUniqueOrThrow
 */
export type UserAlatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter, which UserAlat to fetch.
     */
    where: Prisma.UserAlatWhereUniqueInput;
};
/**
 * UserAlat findFirst
 */
export type UserAlatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter, which UserAlat to fetch.
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAlats to fetch.
     */
    orderBy?: Prisma.UserAlatOrderByWithRelationInput | Prisma.UserAlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserAlats.
     */
    cursor?: Prisma.UserAlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAlats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAlats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserAlats.
     */
    distinct?: Prisma.UserAlatScalarFieldEnum | Prisma.UserAlatScalarFieldEnum[];
};
/**
 * UserAlat findFirstOrThrow
 */
export type UserAlatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter, which UserAlat to fetch.
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAlats to fetch.
     */
    orderBy?: Prisma.UserAlatOrderByWithRelationInput | Prisma.UserAlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserAlats.
     */
    cursor?: Prisma.UserAlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAlats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAlats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserAlats.
     */
    distinct?: Prisma.UserAlatScalarFieldEnum | Prisma.UserAlatScalarFieldEnum[];
};
/**
 * UserAlat findMany
 */
export type UserAlatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter, which UserAlats to fetch.
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAlats to fetch.
     */
    orderBy?: Prisma.UserAlatOrderByWithRelationInput | Prisma.UserAlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserAlats.
     */
    cursor?: Prisma.UserAlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAlats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAlats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserAlats.
     */
    distinct?: Prisma.UserAlatScalarFieldEnum | Prisma.UserAlatScalarFieldEnum[];
};
/**
 * UserAlat create
 */
export type UserAlatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserAlat.
     */
    data: Prisma.XOR<Prisma.UserAlatCreateInput, Prisma.UserAlatUncheckedCreateInput>;
};
/**
 * UserAlat createMany
 */
export type UserAlatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAlats.
     */
    data: Prisma.UserAlatCreateManyInput | Prisma.UserAlatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserAlat createManyAndReturn
 */
export type UserAlatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * The data used to create many UserAlats.
     */
    data: Prisma.UserAlatCreateManyInput | Prisma.UserAlatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserAlat update
 */
export type UserAlatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserAlat.
     */
    data: Prisma.XOR<Prisma.UserAlatUpdateInput, Prisma.UserAlatUncheckedUpdateInput>;
    /**
     * Choose, which UserAlat to update.
     */
    where: Prisma.UserAlatWhereUniqueInput;
};
/**
 * UserAlat updateMany
 */
export type UserAlatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAlats.
     */
    data: Prisma.XOR<Prisma.UserAlatUpdateManyMutationInput, Prisma.UserAlatUncheckedUpdateManyInput>;
    /**
     * Filter which UserAlats to update
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * Limit how many UserAlats to update.
     */
    limit?: number;
};
/**
 * UserAlat updateManyAndReturn
 */
export type UserAlatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * The data used to update UserAlats.
     */
    data: Prisma.XOR<Prisma.UserAlatUpdateManyMutationInput, Prisma.UserAlatUncheckedUpdateManyInput>;
    /**
     * Filter which UserAlats to update
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * Limit how many UserAlats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserAlat upsert
 */
export type UserAlatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserAlat to update in case it exists.
     */
    where: Prisma.UserAlatWhereUniqueInput;
    /**
     * In case the UserAlat found by the `where` argument doesn't exist, create a new UserAlat with this data.
     */
    create: Prisma.XOR<Prisma.UserAlatCreateInput, Prisma.UserAlatUncheckedCreateInput>;
    /**
     * In case the UserAlat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserAlatUpdateInput, Prisma.UserAlatUncheckedUpdateInput>;
};
/**
 * UserAlat delete
 */
export type UserAlatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
    /**
     * Filter which UserAlat to delete.
     */
    where: Prisma.UserAlatWhereUniqueInput;
};
/**
 * UserAlat deleteMany
 */
export type UserAlatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserAlats to delete
     */
    where?: Prisma.UserAlatWhereInput;
    /**
     * Limit how many UserAlats to delete.
     */
    limit?: number;
};
/**
 * UserAlat without action
 */
export type UserAlatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlat
     */
    select?: Prisma.UserAlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAlat
     */
    omit?: Prisma.UserAlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAlatInclude<ExtArgs> | null;
};
//# sourceMappingURL=UserAlat.d.ts.map