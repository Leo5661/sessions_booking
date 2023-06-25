/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Slot` table. All the data in the column will be lost.
  - Added the required column `date` to the `Slot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "dateTime",
ADD COLUMN     "date" DATE NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
