-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('OXYGEN', 'PH', 'TURBIDITY', 'TEMPERATURE');

-- CreateTable
CREATE TABLE "sensor_settings" (
    "id" SERIAL NOT NULL,
    "alatId" TEXT NOT NULL,
    "sensor_type" "SensorType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "min_value" DOUBLE PRECISION,
    "max_value" DOUBLE PRECISION,
    "alert_interval" INTEGER NOT NULL,
    "last_notified_at" TIMESTAMP(3),

    CONSTRAINT "sensor_settings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sensor_settings" ADD CONSTRAINT "sensor_settings_alatId_fkey" FOREIGN KEY ("alatId") REFERENCES "alat"("IDAlat") ON DELETE RESTRICT ON UPDATE CASCADE;
