/*
  Warnings:

  - A unique constraint covering the columns `[bookedBy]` on the table `Slot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Slot_bookedBy_key" ON "Slot"("bookedBy");
