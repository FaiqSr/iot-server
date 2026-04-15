import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SensorSetting
 *
 */
export type SensorSettingModel = runtime.Types.Result.DefaultSelection<Prisma.$SensorSettingPayload>;
export type AggregateSensorSetting = {
    _count: SensorSettingCountAggregateOutputType | null;
    _avg: SensorSettingAvgAggregateOutputType | null;
    _sum: SensorSettingSumAggregateOutputType | null;
    _min: SensorSettingMinAggregateOutputType | null;
    _max: SensorSettingMaxAggregateOutputType | null;
};
export type SensorSettingAvgAggregateOutputType = {
    id: number | null;
    min_value: number | null;
    max_value: number | null;
    alert_interval: number | null;
};
export type SensorSettingSumAggregateOutputType = {
    id: number | null;
    min_value: number | null;
    max_value: number | null;
    alert_interval: number | null;
};
export type SensorSettingMinAggregateOutputType = {
    id: number | null;
    alatId: string | null;
    sensor_type: $Enums.SensorType | null;
    is_active: boolean | null;
    min_value: number | null;
    max_value: number | null;
    alert_interval: number | null;
    last_notified_at: Date | null;
};
export type SensorSettingMaxAggregateOutputType = {
    id: number | null;
    alatId: string | null;
    sensor_type: $Enums.SensorType | null;
    is_active: boolean | null;
    min_value: number | null;
    max_value: number | null;
    alert_interval: number | null;
    last_notified_at: Date | null;
};
export type SensorSettingCountAggregateOutputType = {
    id: number;
    alatId: number;
    sensor_type: number;
    is_active: number;
    min_value: number;
    max_value: number;
    alert_interval: number;
    last_notified_at: number;
    _all: number;
};
export type SensorSettingAvgAggregateInputType = {
    id?: true;
    min_value?: true;
    max_value?: true;
    alert_interval?: true;
};
export type SensorSettingSumAggregateInputType = {
    id?: true;
    min_value?: true;
    max_value?: true;
    alert_interval?: true;
};
export type SensorSettingMinAggregateInputType = {
    id?: true;
    alatId?: true;
    sensor_type?: true;
    is_active?: true;
    min_value?: true;
    max_value?: true;
    alert_interval?: true;
    last_notified_at?: true;
};
export type SensorSettingMaxAggregateInputType = {
    id?: true;
    alatId?: true;
    sensor_type?: true;
    is_active?: true;
    min_value?: true;
    max_value?: true;
    alert_interval?: true;
    last_notified_at?: true;
};
export type SensorSettingCountAggregateInputType = {
    id?: true;
    alatId?: true;
    sensor_type?: true;
    is_active?: true;
    min_value?: true;
    max_value?: true;
    alert_interval?: true;
    last_notified_at?: true;
    _all?: true;
};
export type SensorSettingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SensorSetting to aggregate.
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SensorSettings to fetch.
     */
    orderBy?: Prisma.SensorSettingOrderByWithRelationInput | Prisma.SensorSettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SensorSettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SensorSettings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SensorSettings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SensorSettings
    **/
    _count?: true | SensorSettingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SensorSettingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SensorSettingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SensorSettingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SensorSettingMaxAggregateInputType;
};
export type GetSensorSettingAggregateType<T extends SensorSettingAggregateArgs> = {
    [P in keyof T & keyof AggregateSensorSetting]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSensorSetting[P]> : Prisma.GetScalarType<T[P], AggregateSensorSetting[P]>;
};
export type SensorSettingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SensorSettingWhereInput;
    orderBy?: Prisma.SensorSettingOrderByWithAggregationInput | Prisma.SensorSettingOrderByWithAggregationInput[];
    by: Prisma.SensorSettingScalarFieldEnum[] | Prisma.SensorSettingScalarFieldEnum;
    having?: Prisma.SensorSettingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SensorSettingCountAggregateInputType | true;
    _avg?: SensorSettingAvgAggregateInputType;
    _sum?: SensorSettingSumAggregateInputType;
    _min?: SensorSettingMinAggregateInputType;
    _max?: SensorSettingMaxAggregateInputType;
};
export type SensorSettingGroupByOutputType = {
    id: number;
    alatId: string;
    sensor_type: $Enums.SensorType;
    is_active: boolean;
    min_value: number | null;
    max_value: number | null;
    alert_interval: number;
    last_notified_at: Date | null;
    _count: SensorSettingCountAggregateOutputType | null;
    _avg: SensorSettingAvgAggregateOutputType | null;
    _sum: SensorSettingSumAggregateOutputType | null;
    _min: SensorSettingMinAggregateOutputType | null;
    _max: SensorSettingMaxAggregateOutputType | null;
};
export type GetSensorSettingGroupByPayload<T extends SensorSettingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SensorSettingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SensorSettingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SensorSettingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SensorSettingGroupByOutputType[P]>;
}>>;
export type SensorSettingWhereInput = {
    AND?: Prisma.SensorSettingWhereInput | Prisma.SensorSettingWhereInput[];
    OR?: Prisma.SensorSettingWhereInput[];
    NOT?: Prisma.SensorSettingWhereInput | Prisma.SensorSettingWhereInput[];
    id?: Prisma.IntFilter<"SensorSetting"> | number;
    alatId?: Prisma.StringFilter<"SensorSetting"> | string;
    sensor_type?: Prisma.EnumSensorTypeFilter<"SensorSetting"> | $Enums.SensorType;
    is_active?: Prisma.BoolFilter<"SensorSetting"> | boolean;
    min_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    max_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    alert_interval?: Prisma.IntFilter<"SensorSetting"> | number;
    last_notified_at?: Prisma.DateTimeNullableFilter<"SensorSetting"> | Date | string | null;
    alat?: Prisma.XOR<Prisma.AlatScalarRelationFilter, Prisma.AlatWhereInput>;
};
export type SensorSettingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    sensor_type?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    min_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    max_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
    last_notified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    alat?: Prisma.AlatOrderByWithRelationInput;
};
export type SensorSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SensorSettingWhereInput | Prisma.SensorSettingWhereInput[];
    OR?: Prisma.SensorSettingWhereInput[];
    NOT?: Prisma.SensorSettingWhereInput | Prisma.SensorSettingWhereInput[];
    alatId?: Prisma.StringFilter<"SensorSetting"> | string;
    sensor_type?: Prisma.EnumSensorTypeFilter<"SensorSetting"> | $Enums.SensorType;
    is_active?: Prisma.BoolFilter<"SensorSetting"> | boolean;
    min_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    max_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    alert_interval?: Prisma.IntFilter<"SensorSetting"> | number;
    last_notified_at?: Prisma.DateTimeNullableFilter<"SensorSetting"> | Date | string | null;
    alat?: Prisma.XOR<Prisma.AlatScalarRelationFilter, Prisma.AlatWhereInput>;
}, "id">;
export type SensorSettingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    sensor_type?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    min_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    max_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
    last_notified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SensorSettingCountOrderByAggregateInput;
    _avg?: Prisma.SensorSettingAvgOrderByAggregateInput;
    _max?: Prisma.SensorSettingMaxOrderByAggregateInput;
    _min?: Prisma.SensorSettingMinOrderByAggregateInput;
    _sum?: Prisma.SensorSettingSumOrderByAggregateInput;
};
export type SensorSettingScalarWhereWithAggregatesInput = {
    AND?: Prisma.SensorSettingScalarWhereWithAggregatesInput | Prisma.SensorSettingScalarWhereWithAggregatesInput[];
    OR?: Prisma.SensorSettingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SensorSettingScalarWhereWithAggregatesInput | Prisma.SensorSettingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SensorSetting"> | number;
    alatId?: Prisma.StringWithAggregatesFilter<"SensorSetting"> | string;
    sensor_type?: Prisma.EnumSensorTypeWithAggregatesFilter<"SensorSetting"> | $Enums.SensorType;
    is_active?: Prisma.BoolWithAggregatesFilter<"SensorSetting"> | boolean;
    min_value?: Prisma.FloatNullableWithAggregatesFilter<"SensorSetting"> | number | null;
    max_value?: Prisma.FloatNullableWithAggregatesFilter<"SensorSetting"> | number | null;
    alert_interval?: Prisma.IntWithAggregatesFilter<"SensorSetting"> | number;
    last_notified_at?: Prisma.DateTimeNullableWithAggregatesFilter<"SensorSetting"> | Date | string | null;
};
export type SensorSettingCreateInput = {
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
    alat: Prisma.AlatCreateNestedOneWithoutSensorSettingsInput;
};
export type SensorSettingUncheckedCreateInput = {
    id?: number;
    alatId: string;
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
};
export type SensorSettingUpdateInput = {
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    alat?: Prisma.AlatUpdateOneRequiredWithoutSensorSettingsNestedInput;
};
export type SensorSettingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingCreateManyInput = {
    id?: number;
    alatId: string;
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
};
export type SensorSettingUpdateManyMutationInput = {
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    alatId?: Prisma.StringFieldUpdateOperationsInput | string;
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingListRelationFilter = {
    every?: Prisma.SensorSettingWhereInput;
    some?: Prisma.SensorSettingWhereInput;
    none?: Prisma.SensorSettingWhereInput;
};
export type SensorSettingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SensorSettingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    sensor_type?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    min_value?: Prisma.SortOrder;
    max_value?: Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
    last_notified_at?: Prisma.SortOrder;
};
export type SensorSettingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    min_value?: Prisma.SortOrder;
    max_value?: Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
};
export type SensorSettingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    sensor_type?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    min_value?: Prisma.SortOrder;
    max_value?: Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
    last_notified_at?: Prisma.SortOrder;
};
export type SensorSettingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alatId?: Prisma.SortOrder;
    sensor_type?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    min_value?: Prisma.SortOrder;
    max_value?: Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
    last_notified_at?: Prisma.SortOrder;
};
export type SensorSettingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    min_value?: Prisma.SortOrder;
    max_value?: Prisma.SortOrder;
    alert_interval?: Prisma.SortOrder;
};
export type SensorSettingCreateNestedManyWithoutAlatInput = {
    create?: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput> | Prisma.SensorSettingCreateWithoutAlatInput[] | Prisma.SensorSettingUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.SensorSettingCreateOrConnectWithoutAlatInput | Prisma.SensorSettingCreateOrConnectWithoutAlatInput[];
    createMany?: Prisma.SensorSettingCreateManyAlatInputEnvelope;
    connect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
};
export type SensorSettingUncheckedCreateNestedManyWithoutAlatInput = {
    create?: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput> | Prisma.SensorSettingCreateWithoutAlatInput[] | Prisma.SensorSettingUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.SensorSettingCreateOrConnectWithoutAlatInput | Prisma.SensorSettingCreateOrConnectWithoutAlatInput[];
    createMany?: Prisma.SensorSettingCreateManyAlatInputEnvelope;
    connect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
};
export type SensorSettingUpdateManyWithoutAlatNestedInput = {
    create?: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput> | Prisma.SensorSettingCreateWithoutAlatInput[] | Prisma.SensorSettingUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.SensorSettingCreateOrConnectWithoutAlatInput | Prisma.SensorSettingCreateOrConnectWithoutAlatInput[];
    upsert?: Prisma.SensorSettingUpsertWithWhereUniqueWithoutAlatInput | Prisma.SensorSettingUpsertWithWhereUniqueWithoutAlatInput[];
    createMany?: Prisma.SensorSettingCreateManyAlatInputEnvelope;
    set?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    disconnect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    delete?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    connect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    update?: Prisma.SensorSettingUpdateWithWhereUniqueWithoutAlatInput | Prisma.SensorSettingUpdateWithWhereUniqueWithoutAlatInput[];
    updateMany?: Prisma.SensorSettingUpdateManyWithWhereWithoutAlatInput | Prisma.SensorSettingUpdateManyWithWhereWithoutAlatInput[];
    deleteMany?: Prisma.SensorSettingScalarWhereInput | Prisma.SensorSettingScalarWhereInput[];
};
export type SensorSettingUncheckedUpdateManyWithoutAlatNestedInput = {
    create?: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput> | Prisma.SensorSettingCreateWithoutAlatInput[] | Prisma.SensorSettingUncheckedCreateWithoutAlatInput[];
    connectOrCreate?: Prisma.SensorSettingCreateOrConnectWithoutAlatInput | Prisma.SensorSettingCreateOrConnectWithoutAlatInput[];
    upsert?: Prisma.SensorSettingUpsertWithWhereUniqueWithoutAlatInput | Prisma.SensorSettingUpsertWithWhereUniqueWithoutAlatInput[];
    createMany?: Prisma.SensorSettingCreateManyAlatInputEnvelope;
    set?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    disconnect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    delete?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    connect?: Prisma.SensorSettingWhereUniqueInput | Prisma.SensorSettingWhereUniqueInput[];
    update?: Prisma.SensorSettingUpdateWithWhereUniqueWithoutAlatInput | Prisma.SensorSettingUpdateWithWhereUniqueWithoutAlatInput[];
    updateMany?: Prisma.SensorSettingUpdateManyWithWhereWithoutAlatInput | Prisma.SensorSettingUpdateManyWithWhereWithoutAlatInput[];
    deleteMany?: Prisma.SensorSettingScalarWhereInput | Prisma.SensorSettingScalarWhereInput[];
};
export type EnumSensorTypeFieldUpdateOperationsInput = {
    set?: $Enums.SensorType;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SensorSettingCreateWithoutAlatInput = {
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
};
export type SensorSettingUncheckedCreateWithoutAlatInput = {
    id?: number;
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
};
export type SensorSettingCreateOrConnectWithoutAlatInput = {
    where: Prisma.SensorSettingWhereUniqueInput;
    create: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput>;
};
export type SensorSettingCreateManyAlatInputEnvelope = {
    data: Prisma.SensorSettingCreateManyAlatInput | Prisma.SensorSettingCreateManyAlatInput[];
    skipDuplicates?: boolean;
};
export type SensorSettingUpsertWithWhereUniqueWithoutAlatInput = {
    where: Prisma.SensorSettingWhereUniqueInput;
    update: Prisma.XOR<Prisma.SensorSettingUpdateWithoutAlatInput, Prisma.SensorSettingUncheckedUpdateWithoutAlatInput>;
    create: Prisma.XOR<Prisma.SensorSettingCreateWithoutAlatInput, Prisma.SensorSettingUncheckedCreateWithoutAlatInput>;
};
export type SensorSettingUpdateWithWhereUniqueWithoutAlatInput = {
    where: Prisma.SensorSettingWhereUniqueInput;
    data: Prisma.XOR<Prisma.SensorSettingUpdateWithoutAlatInput, Prisma.SensorSettingUncheckedUpdateWithoutAlatInput>;
};
export type SensorSettingUpdateManyWithWhereWithoutAlatInput = {
    where: Prisma.SensorSettingScalarWhereInput;
    data: Prisma.XOR<Prisma.SensorSettingUpdateManyMutationInput, Prisma.SensorSettingUncheckedUpdateManyWithoutAlatInput>;
};
export type SensorSettingScalarWhereInput = {
    AND?: Prisma.SensorSettingScalarWhereInput | Prisma.SensorSettingScalarWhereInput[];
    OR?: Prisma.SensorSettingScalarWhereInput[];
    NOT?: Prisma.SensorSettingScalarWhereInput | Prisma.SensorSettingScalarWhereInput[];
    id?: Prisma.IntFilter<"SensorSetting"> | number;
    alatId?: Prisma.StringFilter<"SensorSetting"> | string;
    sensor_type?: Prisma.EnumSensorTypeFilter<"SensorSetting"> | $Enums.SensorType;
    is_active?: Prisma.BoolFilter<"SensorSetting"> | boolean;
    min_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    max_value?: Prisma.FloatNullableFilter<"SensorSetting"> | number | null;
    alert_interval?: Prisma.IntFilter<"SensorSetting"> | number;
    last_notified_at?: Prisma.DateTimeNullableFilter<"SensorSetting"> | Date | string | null;
};
export type SensorSettingCreateManyAlatInput = {
    id?: number;
    sensor_type: $Enums.SensorType;
    is_active?: boolean;
    min_value?: number | null;
    max_value?: number | null;
    alert_interval: number;
    last_notified_at?: Date | string | null;
};
export type SensorSettingUpdateWithoutAlatInput = {
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingUncheckedUpdateWithoutAlatInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingUncheckedUpdateManyWithoutAlatInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sensor_type?: Prisma.EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    min_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    max_value?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    alert_interval?: Prisma.IntFieldUpdateOperationsInput | number;
    last_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SensorSettingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alatId?: boolean;
    sensor_type?: boolean;
    is_active?: boolean;
    min_value?: boolean;
    max_value?: boolean;
    alert_interval?: boolean;
    last_notified_at?: boolean;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sensorSetting"]>;
export type SensorSettingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alatId?: boolean;
    sensor_type?: boolean;
    is_active?: boolean;
    min_value?: boolean;
    max_value?: boolean;
    alert_interval?: boolean;
    last_notified_at?: boolean;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sensorSetting"]>;
export type SensorSettingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alatId?: boolean;
    sensor_type?: boolean;
    is_active?: boolean;
    min_value?: boolean;
    max_value?: boolean;
    alert_interval?: boolean;
    last_notified_at?: boolean;
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sensorSetting"]>;
export type SensorSettingSelectScalar = {
    id?: boolean;
    alatId?: boolean;
    sensor_type?: boolean;
    is_active?: boolean;
    min_value?: boolean;
    max_value?: boolean;
    alert_interval?: boolean;
    last_notified_at?: boolean;
};
export type SensorSettingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alatId" | "sensor_type" | "is_active" | "min_value" | "max_value" | "alert_interval" | "last_notified_at", ExtArgs["result"]["sensorSetting"]>;
export type SensorSettingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type SensorSettingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type SensorSettingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alat?: boolean | Prisma.AlatDefaultArgs<ExtArgs>;
};
export type $SensorSettingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SensorSetting";
    objects: {
        alat: Prisma.$AlatPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        alatId: string;
        sensor_type: $Enums.SensorType;
        is_active: boolean;
        min_value: number | null;
        max_value: number | null;
        alert_interval: number;
        last_notified_at: Date | null;
    }, ExtArgs["result"]["sensorSetting"]>;
    composites: {};
};
export type SensorSettingGetPayload<S extends boolean | null | undefined | SensorSettingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload, S>;
export type SensorSettingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SensorSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SensorSettingCountAggregateInputType | true;
};
export interface SensorSettingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SensorSetting'];
        meta: {
            name: 'SensorSetting';
        };
    };
    /**
     * Find zero or one SensorSetting that matches the filter.
     * @param {SensorSettingFindUniqueArgs} args - Arguments to find a SensorSetting
     * @example
     * // Get one SensorSetting
     * const sensorSetting = await prisma.sensorSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorSettingFindUniqueArgs>(args: Prisma.SelectSubset<T, SensorSettingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SensorSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorSettingFindUniqueOrThrowArgs} args - Arguments to find a SensorSetting
     * @example
     * // Get one SensorSetting
     * const sensorSetting = await prisma.sensorSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorSettingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SensorSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SensorSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingFindFirstArgs} args - Arguments to find a SensorSetting
     * @example
     * // Get one SensorSetting
     * const sensorSetting = await prisma.sensorSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorSettingFindFirstArgs>(args?: Prisma.SelectSubset<T, SensorSettingFindFirstArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SensorSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingFindFirstOrThrowArgs} args - Arguments to find a SensorSetting
     * @example
     * // Get one SensorSetting
     * const sensorSetting = await prisma.sensorSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorSettingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SensorSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SensorSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorSettings
     * const sensorSettings = await prisma.sensorSetting.findMany()
     *
     * // Get first 10 SensorSettings
     * const sensorSettings = await prisma.sensorSetting.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sensorSettingWithIdOnly = await prisma.sensorSetting.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SensorSettingFindManyArgs>(args?: Prisma.SelectSubset<T, SensorSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SensorSetting.
     * @param {SensorSettingCreateArgs} args - Arguments to create a SensorSetting.
     * @example
     * // Create one SensorSetting
     * const SensorSetting = await prisma.sensorSetting.create({
     *   data: {
     *     // ... data to create a SensorSetting
     *   }
     * })
     *
     */
    create<T extends SensorSettingCreateArgs>(args: Prisma.SelectSubset<T, SensorSettingCreateArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SensorSettings.
     * @param {SensorSettingCreateManyArgs} args - Arguments to create many SensorSettings.
     * @example
     * // Create many SensorSettings
     * const sensorSetting = await prisma.sensorSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SensorSettingCreateManyArgs>(args?: Prisma.SelectSubset<T, SensorSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SensorSettings and returns the data saved in the database.
     * @param {SensorSettingCreateManyAndReturnArgs} args - Arguments to create many SensorSettings.
     * @example
     * // Create many SensorSettings
     * const sensorSetting = await prisma.sensorSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SensorSettings and only return the `id`
     * const sensorSettingWithIdOnly = await prisma.sensorSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SensorSettingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SensorSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SensorSetting.
     * @param {SensorSettingDeleteArgs} args - Arguments to delete one SensorSetting.
     * @example
     * // Delete one SensorSetting
     * const SensorSetting = await prisma.sensorSetting.delete({
     *   where: {
     *     // ... filter to delete one SensorSetting
     *   }
     * })
     *
     */
    delete<T extends SensorSettingDeleteArgs>(args: Prisma.SelectSubset<T, SensorSettingDeleteArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SensorSetting.
     * @param {SensorSettingUpdateArgs} args - Arguments to update one SensorSetting.
     * @example
     * // Update one SensorSetting
     * const sensorSetting = await prisma.sensorSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SensorSettingUpdateArgs>(args: Prisma.SelectSubset<T, SensorSettingUpdateArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SensorSettings.
     * @param {SensorSettingDeleteManyArgs} args - Arguments to filter SensorSettings to delete.
     * @example
     * // Delete a few SensorSettings
     * const { count } = await prisma.sensorSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SensorSettingDeleteManyArgs>(args?: Prisma.SelectSubset<T, SensorSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SensorSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorSettings
     * const sensorSetting = await prisma.sensorSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SensorSettingUpdateManyArgs>(args: Prisma.SelectSubset<T, SensorSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SensorSettings and returns the data updated in the database.
     * @param {SensorSettingUpdateManyAndReturnArgs} args - Arguments to update many SensorSettings.
     * @example
     * // Update many SensorSettings
     * const sensorSetting = await prisma.sensorSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SensorSettings and only return the `id`
     * const sensorSettingWithIdOnly = await prisma.sensorSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorSettingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SensorSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SensorSetting.
     * @param {SensorSettingUpsertArgs} args - Arguments to update or create a SensorSetting.
     * @example
     * // Update or create a SensorSetting
     * const sensorSetting = await prisma.sensorSetting.upsert({
     *   create: {
     *     // ... data to create a SensorSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorSetting we want to update
     *   }
     * })
     */
    upsert<T extends SensorSettingUpsertArgs>(args: Prisma.SelectSubset<T, SensorSettingUpsertArgs<ExtArgs>>): Prisma.Prisma__SensorSettingClient<runtime.Types.Result.GetResult<Prisma.$SensorSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SensorSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingCountArgs} args - Arguments to filter SensorSettings to count.
     * @example
     * // Count the number of SensorSettings
     * const count = await prisma.sensorSetting.count({
     *   where: {
     *     // ... the filter for the SensorSettings we want to count
     *   }
     * })
    **/
    count<T extends SensorSettingCountArgs>(args?: Prisma.Subset<T, SensorSettingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SensorSettingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SensorSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorSettingAggregateArgs>(args: Prisma.Subset<T, SensorSettingAggregateArgs>): Prisma.PrismaPromise<GetSensorSettingAggregateType<T>>;
    /**
     * Group by SensorSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorSettingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SensorSettingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SensorSettingGroupByArgs['orderBy'];
    } : {
        orderBy?: SensorSettingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SensorSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SensorSetting model
     */
    readonly fields: SensorSettingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SensorSetting.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SensorSettingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the SensorSetting model
 */
export interface SensorSettingFieldRefs {
    readonly id: Prisma.FieldRef<"SensorSetting", 'Int'>;
    readonly alatId: Prisma.FieldRef<"SensorSetting", 'String'>;
    readonly sensor_type: Prisma.FieldRef<"SensorSetting", 'SensorType'>;
    readonly is_active: Prisma.FieldRef<"SensorSetting", 'Boolean'>;
    readonly min_value: Prisma.FieldRef<"SensorSetting", 'Float'>;
    readonly max_value: Prisma.FieldRef<"SensorSetting", 'Float'>;
    readonly alert_interval: Prisma.FieldRef<"SensorSetting", 'Int'>;
    readonly last_notified_at: Prisma.FieldRef<"SensorSetting", 'DateTime'>;
}
/**
 * SensorSetting findUnique
 */
export type SensorSettingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SensorSetting to fetch.
     */
    where: Prisma.SensorSettingWhereUniqueInput;
};
/**
 * SensorSetting findUniqueOrThrow
 */
export type SensorSettingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SensorSetting to fetch.
     */
    where: Prisma.SensorSettingWhereUniqueInput;
};
/**
 * SensorSetting findFirst
 */
export type SensorSettingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SensorSetting to fetch.
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SensorSettings to fetch.
     */
    orderBy?: Prisma.SensorSettingOrderByWithRelationInput | Prisma.SensorSettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SensorSettings.
     */
    cursor?: Prisma.SensorSettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SensorSettings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SensorSettings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SensorSettings.
     */
    distinct?: Prisma.SensorSettingScalarFieldEnum | Prisma.SensorSettingScalarFieldEnum[];
};
/**
 * SensorSetting findFirstOrThrow
 */
export type SensorSettingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SensorSetting to fetch.
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SensorSettings to fetch.
     */
    orderBy?: Prisma.SensorSettingOrderByWithRelationInput | Prisma.SensorSettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SensorSettings.
     */
    cursor?: Prisma.SensorSettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SensorSettings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SensorSettings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SensorSettings.
     */
    distinct?: Prisma.SensorSettingScalarFieldEnum | Prisma.SensorSettingScalarFieldEnum[];
};
/**
 * SensorSetting findMany
 */
export type SensorSettingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SensorSettings to fetch.
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SensorSettings to fetch.
     */
    orderBy?: Prisma.SensorSettingOrderByWithRelationInput | Prisma.SensorSettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SensorSettings.
     */
    cursor?: Prisma.SensorSettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SensorSettings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SensorSettings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SensorSettings.
     */
    distinct?: Prisma.SensorSettingScalarFieldEnum | Prisma.SensorSettingScalarFieldEnum[];
};
/**
 * SensorSetting create
 */
export type SensorSettingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SensorSetting.
     */
    data: Prisma.XOR<Prisma.SensorSettingCreateInput, Prisma.SensorSettingUncheckedCreateInput>;
};
/**
 * SensorSetting createMany
 */
export type SensorSettingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorSettings.
     */
    data: Prisma.SensorSettingCreateManyInput | Prisma.SensorSettingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SensorSetting createManyAndReturn
 */
export type SensorSettingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorSetting
     */
    select?: Prisma.SensorSettingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SensorSetting
     */
    omit?: Prisma.SensorSettingOmit<ExtArgs> | null;
    /**
     * The data used to create many SensorSettings.
     */
    data: Prisma.SensorSettingCreateManyInput | Prisma.SensorSettingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SensorSettingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SensorSetting update
 */
export type SensorSettingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SensorSetting.
     */
    data: Prisma.XOR<Prisma.SensorSettingUpdateInput, Prisma.SensorSettingUncheckedUpdateInput>;
    /**
     * Choose, which SensorSetting to update.
     */
    where: Prisma.SensorSettingWhereUniqueInput;
};
/**
 * SensorSetting updateMany
 */
export type SensorSettingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorSettings.
     */
    data: Prisma.XOR<Prisma.SensorSettingUpdateManyMutationInput, Prisma.SensorSettingUncheckedUpdateManyInput>;
    /**
     * Filter which SensorSettings to update
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * Limit how many SensorSettings to update.
     */
    limit?: number;
};
/**
 * SensorSetting updateManyAndReturn
 */
export type SensorSettingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorSetting
     */
    select?: Prisma.SensorSettingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SensorSetting
     */
    omit?: Prisma.SensorSettingOmit<ExtArgs> | null;
    /**
     * The data used to update SensorSettings.
     */
    data: Prisma.XOR<Prisma.SensorSettingUpdateManyMutationInput, Prisma.SensorSettingUncheckedUpdateManyInput>;
    /**
     * Filter which SensorSettings to update
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * Limit how many SensorSettings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SensorSettingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SensorSetting upsert
 */
export type SensorSettingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SensorSetting to update in case it exists.
     */
    where: Prisma.SensorSettingWhereUniqueInput;
    /**
     * In case the SensorSetting found by the `where` argument doesn't exist, create a new SensorSetting with this data.
     */
    create: Prisma.XOR<Prisma.SensorSettingCreateInput, Prisma.SensorSettingUncheckedCreateInput>;
    /**
     * In case the SensorSetting was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SensorSettingUpdateInput, Prisma.SensorSettingUncheckedUpdateInput>;
};
/**
 * SensorSetting delete
 */
export type SensorSettingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SensorSetting to delete.
     */
    where: Prisma.SensorSettingWhereUniqueInput;
};
/**
 * SensorSetting deleteMany
 */
export type SensorSettingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SensorSettings to delete
     */
    where?: Prisma.SensorSettingWhereInput;
    /**
     * Limit how many SensorSettings to delete.
     */
    limit?: number;
};
/**
 * SensorSetting without action
 */
export type SensorSettingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=SensorSetting.d.ts.map