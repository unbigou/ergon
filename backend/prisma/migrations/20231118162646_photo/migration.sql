/*
  Warnings:

  - The `photo` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "photo",
ADD COLUMN     "photo" VARCHAR(255)[];
