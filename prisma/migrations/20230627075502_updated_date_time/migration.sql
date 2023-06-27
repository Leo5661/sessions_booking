/*
  Warnings:

  - A unique constraint covering the columns `[dateTime]` on the table `Slot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Slot_dateTime_key" ON "Slot"("dateTime");
