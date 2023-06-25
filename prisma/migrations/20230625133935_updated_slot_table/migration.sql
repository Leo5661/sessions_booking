/*
  Warnings:

  - You are about to drop the column `bookedBy` on the `Slot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookedById]` on the table `Slot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookedById` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_bookedBy_fkey";

-- DropIndex
DROP INDEX "Slot_bookedBy_key";

-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "bookedBy",
ADD COLUMN     "bookedById" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Slot_bookedById_key" ON "Slot"("bookedById");

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_bookedById_fkey" FOREIGN KEY ("bookedById") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
