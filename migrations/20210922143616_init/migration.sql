-- CreateTable
CREATE TABLE "Supply" (
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Supply_pkey" PRIMARY KEY ("name")
);
