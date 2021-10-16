/*
  Warnings:

  - You are about to drop the `Supply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Supply";

-- CreateTable
CREATE TABLE "supply" (
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "supply_pkey" PRIMARY KEY ("name")
);
