-- DropForeignKey
ALTER TABLE "reports" DROP CONSTRAINT "reports_clientId_fkey";

-- DropForeignKey
ALTER TABLE "reports" DROP CONSTRAINT "reports_saleId_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "cashierId" INTEGER;
