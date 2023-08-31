-- CreateTable
CREATE TABLE "Developer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pricePerTon" REAL NOT NULL,
    "offeredVolumeInTons" INTEGER NOT NULL,
    "distributionWeight" INTEGER NOT NULL,
    "supplierName" TEXT NOT NULL,
    "earliestDelivery" DATETIME NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Developer_name_key" ON "Developer"("name");
