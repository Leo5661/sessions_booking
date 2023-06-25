/*
  Warnings:

  - Added the required column `bookedBy` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "bookedBy" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_bookedBy_fkey" FOREIGN KEY ("bookedBy") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
