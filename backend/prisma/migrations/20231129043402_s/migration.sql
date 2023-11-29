/*
  Warnings:

  - Added the required column `rating` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingCont` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingMax` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "rating" VARCHAR(255) NOT NULL,
ADD COLUMN     "ratingCont" VARCHAR(255) NOT NULL,
ADD COLUMN     "ratingMax" VARCHAR(255) NOT NULL;
