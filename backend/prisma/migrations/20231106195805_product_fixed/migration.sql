/*
  Warnings:

  - Made the column `photo` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `formulation` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cultures` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `aplication` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product" ALTER COLUMN "photo" SET NOT NULL,
ALTER COLUMN "formulation" SET NOT NULL,
ALTER COLUMN "cultures" SET NOT NULL,
ALTER COLUMN "aplication" SET NOT NULL;
