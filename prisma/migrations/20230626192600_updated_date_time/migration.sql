-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dean" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Dean_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "dateTime" TIMESTAMPTZ NOT NULL,
    "bookedById" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_universityId_key" ON "Student"("universityId");

-- CreateIndex
CREATE UNIQUE INDEX "Dean_universityId_key" ON "Dean"("universityId");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_bookedById_key" ON "Slot"("bookedById");

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Dean"("universityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_bookedById_fkey" FOREIGN KEY ("bookedById") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
