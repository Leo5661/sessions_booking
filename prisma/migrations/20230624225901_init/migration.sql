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
    "date" TIMESTAMP(3) NOT NULL,
    "isBooked" BOOLEAN NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_universityId_key" ON "Student"("universityId");

-- CreateIndex
CREATE UNIQUE INDEX "Dean_universityId_key" ON "Dean"("universityId");

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Dean"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
