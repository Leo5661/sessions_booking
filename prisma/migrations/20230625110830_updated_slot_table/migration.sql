/*
  Warnings:

  - Added the required column `time` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "time" TIME NOT NULL,
ALTER COLUMN "date" SET DATA TYPE DATE;
