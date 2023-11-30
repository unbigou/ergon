/*
  Warnings:

  - Added the required column `sellerId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "sellerId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
