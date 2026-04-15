/*
  Warnings:

  - You are about to drop the column `owner_id` on the `alat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "alat" DROP CONSTRAINT "alat_owner_id_fkey";

-- AlterTable
ALTER TABLE "alat" DROP COLUMN "owner_id";

-- CreateTable
CREATE TABLE "user_alat" (
    "userId" TEXT NOT NULL,
    "alatId" TEXT NOT NULL,

    CONSTRAINT "user_alat_pkey" PRIMARY KEY ("userId","alatId")
);

-- AddForeignKey
ALTER TABLE "user_alat" ADD CONSTRAINT "user_alat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_alat" ADD CONSTRAINT "user_alat_alatId_fkey" FOREIGN KEY ("alatId") REFERENCES "alat"("IDAlat") ON DELETE RESTRICT ON UPDATE CASCADE;
