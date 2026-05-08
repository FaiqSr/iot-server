/*
  Warnings:

  - You are about to drop the column `fcm_token` on the `alat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "alat" DROP COLUMN "fcm_token";

-- AlterTable
ALTER TABLE "user_alat" ADD COLUMN     "fcm_token" TEXT;
