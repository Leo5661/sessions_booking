/*
  Warnings:

  - Changed the type of `date` on the `Slot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Slot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "date",
ADD COLUMN     "date" DATE NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIME NOT NULL;
