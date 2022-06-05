/*
  Warnings:

  - You are about to drop the `ItemsOnSales` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemsOnSales" DROP CONSTRAINT "ItemsOnSales_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemsOnSales" DROP CONSTRAINT "ItemsOnSales_saleId_fkey";

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "items" TEXT NOT NULL;

-- DropTable
DROP TABLE "ItemsOnSales";
