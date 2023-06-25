/*
  Warnings:

  - You are about to drop the column `date` on the `Slot` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Slot` table. All the data in the column will be lost.
  - Added the required column `dateTime` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "date",
DROP COLUMN "time",
ADD COLUMN     "dateTime" DATE NOT NULL;
