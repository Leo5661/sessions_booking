-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_belongsToId_fkey";

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Dean"("universityId") ON DELETE RESTRICT ON UPDATE CASCADE;
