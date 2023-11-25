/*
  Warnings:

  - Added the required column `productId` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "review" ADD COLUMN     "productId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
