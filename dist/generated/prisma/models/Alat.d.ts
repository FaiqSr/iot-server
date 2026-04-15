import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Alat
 *
 */
export type AlatModel = runtime.Types.Result.DefaultSelection<Prisma.$AlatPayload>;
export type AggregateAlat = {
    _count: AlatCountAggregateOutputType | null;
    _min: AlatMinAggregateOutputType | null;
    _max: AlatMaxAggregateOutputType | null;
};
export type AlatMinAggregateOutputType = {
    id: string | null;
    nama: string | null;
    type: string | null;
};
export type AlatMaxAggregateOutputType = {
    id: string | null;
    nama: string | null;
    type: string | null;
};
export type AlatCountAggregateOutputType = {
    id: number;
    nama: number;
    type: number;
    _all: number;
};
export type AlatMinAggregateInputType = {
    id?: true;
    nama?: true;
    type?: true;
};
export type AlatMaxAggregateInputType = {
    id?: true;
    nama?: true;
    type?: true;
};
export type AlatCountAggregateInputType = {
    id?: true;
    nama?: true;
    type?: true;
    _all?: true;
};
export type AlatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alat to aggregate.
     */
    where?: Prisma.AlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alats to fetch.
     */
    orderBy?: Prisma.AlatOrderByWithRelationInput | Prisma.AlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Alats
    **/
    _count?: true | AlatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AlatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AlatMaxAggregateInputType;
};
export type GetAlatAggregateType<T extends AlatAggregateArgs> = {
    [P in keyof T & keyof AggregateAlat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlat[P]> : Prisma.GetScalarType<T[P], AggregateAlat[P]>;
};
export type AlatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlatWhereInput;
    orderBy?: Prisma.AlatOrderByWithAggregationInput | Prisma.AlatOrderByWithAggregationInput[];
    by: Prisma.AlatScalarFieldEnum[] | Prisma.AlatScalarFieldEnum;
    having?: Prisma.AlatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlatCountAggregateInputType | true;
    _min?: AlatMinAggregateInputType;
    _max?: AlatMaxAggregateInputType;
};
export type AlatGroupByOutputType = {
    id: string;
    nama: string;
    type: string;
    _count: AlatCountAggregateOutputType | null;
    _min: AlatMinAggregateOutputType | null;
    _max: AlatMaxAggregateOutputType | null;
};
export type GetAlatGroupByPayload<T extends AlatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlatGroupByOutputType[P]>;
}>>;
export type AlatWhereInput = {
    AND?: Prisma.AlatWhereInput | Prisma.AlatWhereInput[];
    OR?: Prisma.AlatWhereInput[];
    NOT?: Prisma.AlatWhereInput | Prisma.AlatWhereInput[];
    id?: Prisma.StringFilter<"Alat"> | string;
    nama?: Prisma.StringFilter<"Alat"> | string;
    type?: Prisma.StringFilter<"Alat"> | string;
    userAlats?: Prisma.UserAlatListRelationFilter;
    sensorSettings?: Prisma.SensorSettingListRelationFilter;
};
export type AlatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userAlats?: Prisma.UserAlatOrderByRelationAggregateInput;
    sensorSettings?: Prisma.SensorSettingOrderByRelationAggregateInput;
};
export type AlatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AlatWhereInput | Prisma.AlatWhereInput[];
    OR?: Prisma.AlatWhereInput[];
    NOT?: Prisma.AlatWhereInput | Prisma.AlatWhereInput[];
    nama?: Prisma.StringFilter<"Alat"> | string;
    type?: Prisma.StringFilter<"Alat"> | string;
    userAlats?: Prisma.UserAlatListRelationFilter;
    sensorSettings?: Prisma.SensorSettingListRelationFilter;
}, "id">;
export type AlatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.AlatCountOrderByAggregateInput;
    _max?: Prisma.AlatMaxOrderByAggregateInput;
    _min?: Prisma.AlatMinOrderByAggregateInput;
};
export type AlatScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlatScalarWhereWithAggregatesInput | Prisma.AlatScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlatScalarWhereWithAggregatesInput | Prisma.AlatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Alat"> | string;
    nama?: Prisma.StringWithAggregatesFilter<"Alat"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Alat"> | string;
};
export type AlatCreateInput = {
    id?: string;
    nama: string;
    type: string;
    userAlats?: Prisma.UserAlatCreateNestedManyWithoutAlatInput;
    sensorSettings?: Prisma.SensorSettingCreateNestedManyWithoutAlatInput;
};
export type AlatUncheckedCreateInput = {
    id?: string;
    nama: string;
    type: string;
    userAlats?: Prisma.UserAlatUncheckedCreateNestedManyWithoutAlatInput;
    sensorSettings?: Prisma.SensorSettingUncheckedCreateNestedManyWithoutAlatInput;
};
export type AlatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userAlats?: Prisma.UserAlatUpdateManyWithoutAlatNestedInput;
    sensorSettings?: Prisma.SensorSettingUpdateManyWithoutAlatNestedInput;
};
export type AlatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userAlats?: Prisma.UserAlatUncheckedUpdateManyWithoutAlatNestedInput;
    sensorSettings?: Prisma.SensorSettingUncheckedUpdateManyWithoutAlatNestedInput;
};
export type AlatCreateManyInput = {
    id?: string;
    nama: string;
    type: string;
};
export type AlatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AlatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AlatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type AlatScalarRelationFilter = {
    is?: Prisma.AlatWhereInput;
    isNot?: Prisma.AlatWhereInput;
};
export type AlatCreateNestedOneWithoutUserAlatsInput = {
    create?: Prisma.XOR<Prisma.AlatCreateWithoutUserAlatsInput, Prisma.AlatUncheckedCreateWithoutUserAlatsInput>;
    connectOrCreate?: Prisma.AlatCreateOrConnectWithoutUserAlatsInput;
    connect?: Prisma.AlatWhereUniqueInput;
};
export type AlatUpdateOneRequiredWithoutUserAlatsNestedInput = {
    create?: Prisma.XOR<Prisma.AlatCreateWithoutUserAlatsInput, Prisma.AlatUncheckedCreateWithoutUserAlatsInput>;
    connectOrCreate?: Prisma.AlatCreateOrConnectWithoutUserAlatsInput;
    upsert?: Prisma.AlatUpsertWithoutUserAlatsInput;
    connect?: Prisma.AlatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlatUpdateToOneWithWhereWithoutUserAlatsInput, Prisma.AlatUpdateWithoutUserAlatsInput>, Prisma.AlatUncheckedUpdateWithoutUserAlatsInput>;
};
export type AlatCreateNestedOneWithoutSensorSettingsInput = {
    create?: Prisma.XOR<Prisma.AlatCreateWithoutSensorSettingsInput, Prisma.AlatUncheckedCreateWithoutSensorSettingsInput>;
    connectOrCreate?: Prisma.AlatCreateOrConnectWithoutSensorSettingsInput;
    connect?: Prisma.AlatWhereUniqueInput;
};
export type AlatUpdateOneRequiredWithoutSensorSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.AlatCreateWithoutSensorSettingsInput, Prisma.AlatUncheckedCreateWithoutSensorSettingsInput>;
    connectOrCreate?: Prisma.AlatCreateOrConnectWithoutSensorSettingsInput;
    upsert?: Prisma.AlatUpsertWithoutSensorSettingsInput;
    connect?: Prisma.AlatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlatUpdateToOneWithWhereWithoutSensorSettingsInput, Prisma.AlatUpdateWithoutSensorSettingsInput>, Prisma.AlatUncheckedUpdateWithoutSensorSettingsInput>;
};
export type AlatCreateWithoutUserAlatsInput = {
    id?: string;
    nama: string;
    type: string;
    sensorSettings?: Prisma.SensorSettingCreateNestedManyWithoutAlatInput;
};
export type AlatUncheckedCreateWithoutUserAlatsInput = {
    id?: string;
    nama: string;
    type: string;
    sensorSettings?: Prisma.SensorSettingUncheckedCreateNestedManyWithoutAlatInput;
};
export type AlatCreateOrConnectWithoutUserAlatsInput = {
    where: Prisma.AlatWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlatCreateWithoutUserAlatsInput, Prisma.AlatUncheckedCreateWithoutUserAlatsInput>;
};
export type AlatUpsertWithoutUserAlatsInput = {
    update: Prisma.XOR<Prisma.AlatUpdateWithoutUserAlatsInput, Prisma.AlatUncheckedUpdateWithoutUserAlatsInput>;
    create: Prisma.XOR<Prisma.AlatCreateWithoutUserAlatsInput, Prisma.AlatUncheckedCreateWithoutUserAlatsInput>;
    where?: Prisma.AlatWhereInput;
};
export type AlatUpdateToOneWithWhereWithoutUserAlatsInput = {
    where?: Prisma.AlatWhereInput;
    data: Prisma.XOR<Prisma.AlatUpdateWithoutUserAlatsInput, Prisma.AlatUncheckedUpdateWithoutUserAlatsInput>;
};
export type AlatUpdateWithoutUserAlatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    sensorSettings?: Prisma.SensorSettingUpdateManyWithoutAlatNestedInput;
};
export type AlatUncheckedUpdateWithoutUserAlatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    sensorSettings?: Prisma.SensorSettingUncheckedUpdateManyWithoutAlatNestedInput;
};
export type AlatCreateWithoutSensorSettingsInput = {
    id?: string;
    nama: string;
    type: string;
    userAlats?: Prisma.UserAlatCreateNestedManyWithoutAlatInput;
};
export type AlatUncheckedCreateWithoutSensorSettingsInput = {
    id?: string;
    nama: string;
    type: string;
    userAlats?: Prisma.UserAlatUncheckedCreateNestedManyWithoutAlatInput;
};
export type AlatCreateOrConnectWithoutSensorSettingsInput = {
    where: Prisma.AlatWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlatCreateWithoutSensorSettingsInput, Prisma.AlatUncheckedCreateWithoutSensorSettingsInput>;
};
export type AlatUpsertWithoutSensorSettingsInput = {
    update: Prisma.XOR<Prisma.AlatUpdateWithoutSensorSettingsInput, Prisma.AlatUncheckedUpdateWithoutSensorSettingsInput>;
    create: Prisma.XOR<Prisma.AlatCreateWithoutSensorSettingsInput, Prisma.AlatUncheckedCreateWithoutSensorSettingsInput>;
    where?: Prisma.AlatWhereInput;
};
export type AlatUpdateToOneWithWhereWithoutSensorSettingsInput = {
    where?: Prisma.AlatWhereInput;
    data: Prisma.XOR<Prisma.AlatUpdateWithoutSensorSettingsInput, Prisma.AlatUncheckedUpdateWithoutSensorSettingsInput>;
};
export type AlatUpdateWithoutSensorSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userAlats?: Prisma.UserAlatUpdateManyWithoutAlatNestedInput;
};
export type AlatUncheckedUpdateWithoutSensorSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userAlats?: Prisma.UserAlatUncheckedUpdateManyWithoutAlatNestedInput;
};
/**
 * Count Type AlatCountOutputType
 */
export type AlatCountOutputType = {
    userAlats: number;
    sensorSettings: number;
};
export type AlatCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userAlats?: boolean | AlatCountOutputTypeCountUserAlatsArgs;
    sensorSettings?: boolean | AlatCountOutputTypeCountSensorSettingsArgs;
};
/**
 * AlatCountOutputType without action
 */
export type AlatCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlatCountOutputType
     */
    select?: Prisma.AlatCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AlatCountOutputType without action
 */
export type AlatCountOutputTypeCountUserAlatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAlatWhereInput;
};
/**
 * AlatCountOutputType without action
 */
export type AlatCountOutputTypeCountSensorSettingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SensorSettingWhereInput;
};
export type AlatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    type?: boolean;
    userAlats?: boolean | Prisma.Alat$userAlatsArgs<ExtArgs>;
    sensorSettings?: boolean | Prisma.Alat$sensorSettingsArgs<ExtArgs>;
    _count?: boolean | Prisma.AlatCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alat"]>;
export type AlatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    type?: boolean;
}, ExtArgs["result"]["alat"]>;
export type AlatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    type?: boolean;
}, ExtArgs["result"]["alat"]>;
export type AlatSelectScalar = {
    id?: boolean;
    nama?: boolean;
    type?: boolean;
};
export type AlatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nama" | "type", ExtArgs["result"]["alat"]>;
export type AlatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userAlats?: boolean | Prisma.Alat$userAlatsArgs<ExtArgs>;
    sensorSettings?: boolean | Prisma.Alat$sensorSettingsArgs<ExtArgs>;
    _count?: boolean | Prisma.AlatCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AlatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AlatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AlatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alat";
    objects: {
        userAlats: Prisma.$UserAlatPayload<ExtArgs>[];
        sensorSettings: Prisma.$SensorSettingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nama: string;
        type: string;
    }, ExtArgs["result"]["alat"]>;
    composites: {};
};
export type AlatGetPayload<S extends boolean | null | undefined | AlatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlatPayload, S>;
export type AlatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlatCountAggregateInputType | true;
};
export interface AlatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alat'];
        meta: {
            name: 'Alat';
        };
    };
    /**
     * Find zero or one Alat that matches the filter.
     * @param {AlatFindUniqueArgs} args - Arguments to find a Alat
     * @example
     * // Get one Alat
     * const alat = await prisma.alat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlatFindUniqueArgs>(args: Prisma.SelectSubset<T, AlatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlatFindUniqueOrThrowArgs} args - Arguments to find a Alat
     * @example
     * // Get one Alat
     * const alat = await prisma.alat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatFindFirstArgs} args - Arguments to find a Alat
     * @example
     * // Get one Alat
     * const alat = await prisma.alat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlatFindFirstArgs>(args?: Prisma.SelectSubset<T, AlatFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatFindFirstOrThrowArgs} args - Arguments to find a Alat
     * @example
     * // Get one Alat
     * const alat = await prisma.alat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alats
     * const alats = await prisma.alat.findMany()
     *
     * // Get first 10 Alats
     * const alats = await prisma.alat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const alatWithIdOnly = await prisma.alat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AlatFindManyArgs>(args?: Prisma.SelectSubset<T, AlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alat.
     * @param {AlatCreateArgs} args - Arguments to create a Alat.
     * @example
     * // Create one Alat
     * const Alat = await prisma.alat.create({
     *   data: {
     *     // ... data to create a Alat
     *   }
     * })
     *
     */
    create<T extends AlatCreateArgs>(args: Prisma.SelectSubset<T, AlatCreateArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alats.
     * @param {AlatCreateManyArgs} args - Arguments to create many Alats.
     * @example
     * // Create many Alats
     * const alat = await prisma.alat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AlatCreateManyArgs>(args?: Prisma.SelectSubset<T, AlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alats and returns the data saved in the database.
     * @param {AlatCreateManyAndReturnArgs} args - Arguments to create many Alats.
     * @example
     * // Create many Alats
     * const alat = await prisma.alat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alats and only return the `id`
     * const alatWithIdOnly = await prisma.alat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AlatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alat.
     * @param {AlatDeleteArgs} args - Arguments to delete one Alat.
     * @example
     * // Delete one Alat
     * const Alat = await prisma.alat.delete({
     *   where: {
     *     // ... filter to delete one Alat
     *   }
     * })
     *
     */
    delete<T extends AlatDeleteArgs>(args: Prisma.SelectSubset<T, AlatDeleteArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alat.
     * @param {AlatUpdateArgs} args - Arguments to update one Alat.
     * @example
     * // Update one Alat
     * const alat = await prisma.alat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AlatUpdateArgs>(args: Prisma.SelectSubset<T, AlatUpdateArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alats.
     * @param {AlatDeleteManyArgs} args - Arguments to filter Alats to delete.
     * @example
     * // Delete a few Alats
     * const { count } = await prisma.alat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AlatDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alats
     * const alat = await prisma.alat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AlatUpdateManyArgs>(args: Prisma.SelectSubset<T, AlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alats and returns the data updated in the database.
     * @param {AlatUpdateManyAndReturnArgs} args - Arguments to update many Alats.
     * @example
     * // Update many Alats
     * const alat = await prisma.alat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alats and only return the `id`
     * const alatWithIdOnly = await prisma.alat.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AlatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alat.
     * @param {AlatUpsertArgs} args - Arguments to update or create a Alat.
     * @example
     * // Update or create a Alat
     * const alat = await prisma.alat.upsert({
     *   create: {
     *     // ... data to create a Alat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alat we want to update
     *   }
     * })
     */
    upsert<T extends AlatUpsertArgs>(args: Prisma.SelectSubset<T, AlatUpsertArgs<ExtArgs>>): Prisma.Prisma__AlatClient<runtime.Types.Result.GetResult<Prisma.$AlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatCountArgs} args - Arguments to filter Alats to count.
     * @example
     * // Count the number of Alats
     * const count = await prisma.alat.count({
     *   where: {
     *     // ... the filter for the Alats we want to count
     *   }
     * })
    **/
    count<T extends AlatCountArgs>(args?: Prisma.Subset<T, AlatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlatAggregateArgs>(args: Prisma.Subset<T, AlatAggregateArgs>): Prisma.PrismaPromise<GetAlatAggregateType<T>>;
    /**
     * Group by Alat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AlatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlatGroupByArgs['orderBy'];
    } : {
        orderBy?: AlatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Alat model
     */
    readonly fields: AlatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Alat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AlatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userAlats<T extends Prisma.Alat$userAlatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Alat$userAlatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sensorSettings<T extends Prisma.Alat$sensorSettingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Alat$sensorSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Alat model
 */
export interface AlatFieldRefs {
    readonly id: Prisma.FieldRef<"Alat", 'String'>;
    readonly nama: Prisma.FieldRef<"Alat", 'String'>;
    readonly type: Prisma.FieldRef<"Alat", 'String'>;
}
/**
 * Alat findUnique
 */
export type AlatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter, which Alat to fetch.
     */
    where: Prisma.AlatWhereUniqueInput;
};
/**
 * Alat findUniqueOrThrow
 */
export type AlatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter, which Alat to fetch.
     */
    where: Prisma.AlatWhereUniqueInput;
};
/**
 * Alat findFirst
 */
export type AlatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter, which Alat to fetch.
     */
    where?: Prisma.AlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alats to fetch.
     */
    orderBy?: Prisma.AlatOrderByWithRelationInput | Prisma.AlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alats.
     */
    cursor?: Prisma.AlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alats.
     */
    distinct?: Prisma.AlatScalarFieldEnum | Prisma.AlatScalarFieldEnum[];
};
/**
 * Alat findFirstOrThrow
 */
export type AlatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter, which Alat to fetch.
     */
    where?: Prisma.AlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alats to fetch.
     */
    orderBy?: Prisma.AlatOrderByWithRelationInput | Prisma.AlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alats.
     */
    cursor?: Prisma.AlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alats.
     */
    distinct?: Prisma.AlatScalarFieldEnum | Prisma.AlatScalarFieldEnum[];
};
/**
 * Alat findMany
 */
export type AlatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter, which Alats to fetch.
     */
    where?: Prisma.AlatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alats to fetch.
     */
    orderBy?: Prisma.AlatOrderByWithRelationInput | Prisma.AlatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Alats.
     */
    cursor?: Prisma.AlatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alats.
     */
    distinct?: Prisma.AlatScalarFieldEnum | Prisma.AlatScalarFieldEnum[];
};
/**
 * Alat create
 */
export type AlatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * The data needed to create a Alat.
     */
    data: Prisma.XOR<Prisma.AlatCreateInput, Prisma.AlatUncheckedCreateInput>;
};
/**
 * Alat createMany
 */
export type AlatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alats.
     */
    data: Prisma.AlatCreateManyInput | Prisma.AlatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Alat createManyAndReturn
 */
export type AlatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * The data used to create many Alats.
     */
    data: Prisma.AlatCreateManyInput | Prisma.AlatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Alat update
 */
export type AlatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * The data needed to update a Alat.
     */
    data: Prisma.XOR<Prisma.AlatUpdateInput, Prisma.AlatUncheckedUpdateInput>;
    /**
     * Choose, which Alat to update.
     */
    where: Prisma.AlatWhereUniqueInput;
};
/**
 * Alat updateMany
 */
export type AlatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Alats.
     */
    data: Prisma.XOR<Prisma.AlatUpdateManyMutationInput, Prisma.AlatUncheckedUpdateManyInput>;
    /**
     * Filter which Alats to update
     */
    where?: Prisma.AlatWhereInput;
    /**
     * Limit how many Alats to update.
     */
    limit?: number;
};
/**
 * Alat updateManyAndReturn
 */
export type AlatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * The data used to update Alats.
     */
    data: Prisma.XOR<Prisma.AlatUpdateManyMutationInput, Prisma.AlatUncheckedUpdateManyInput>;
    /**
     * Filter which Alats to update
     */
    where?: Prisma.AlatWhereInput;
    /**
     * Limit how many Alats to update.
     */
    limit?: number;
};
/**
 * Alat upsert
 */
export type AlatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * The filter to search for the Alat to update in case it exists.
     */
    where: Prisma.AlatWhereUniqueInput;
    /**
     * In case the Alat found by the `where` argument doesn't exist, create a new Alat with this data.
     */
    create: Prisma.XOR<Prisma.AlatCreateInput, Prisma.AlatUncheckedCreateInput>;
    /**
     * In case the Alat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AlatUpdateInput, Prisma.AlatUncheckedUpdateInput>;
};
/**
 * Alat delete
 */
export type AlatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
    /**
     * Filter which Alat to delete.
     */
    where: Prisma.AlatWhereUniqueInput;
};
/**
 * Alat deleteMany
 */
export type AlatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alats to delete
     */
    where?: Prisma.AlatWhereInput;
    /**
     * Limit how many Alats to delete.
     */
    limit?: number;
};
/**
 * Alat.userAlats
 */
export type Alat$userAlatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserAlatWhereInput;
    orderBy?: Prisma.UserAlatOrderByWithRelationInput | Prisma.UserAlatOrderByWithRelationInput[];
    cursor?: Prisma.UserAlatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAlatScalarFieldEnum | Prisma.UserAlatScalarFieldEnum[];
};
/**
 * Alat.sensorSettings
 */
export type Alat$sensorSettingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorSetting
     */
    select?: Prisma.SensorSettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SensorSetting
     */
    omit?: Prisma.SensorSettingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SensorSettingInclude<ExtArgs> | null;
    where?: Prisma.SensorSettingWhereInput;
    orderBy?: Prisma.SensorSettingOrderByWithRelationInput | Prisma.SensorSettingOrderByWithRelationInput[];
    cursor?: Prisma.SensorSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SensorSettingScalarFieldEnum | Prisma.SensorSettingScalarFieldEnum[];
};
/**
 * Alat without action
 */
export type AlatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alat
     */
    select?: Prisma.AlatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alat
     */
    omit?: Prisma.AlatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlatInclude<ExtArgs> | null;
};
//# sourceMappingURL=Alat.d.ts.map