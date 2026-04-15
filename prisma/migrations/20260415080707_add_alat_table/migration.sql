-- CreateTable
CREATE TABLE "alat" (
    "IDAlat" TEXT NOT NULL,
    "nama_alat" VARCHAR(150) NOT NULL,
    "type_alat" VARCHAR(150) NOT NULL,
    "owner_id" TEXT,

    CONSTRAINT "alat_pkey" PRIMARY KEY ("IDAlat")
);

-- AddForeignKey
ALTER TABLE "alat" ADD CONSTRAINT "alat_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
