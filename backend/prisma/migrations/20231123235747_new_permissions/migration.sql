/*
  Warnings:

  - The `description` column on the `permission` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "permission" DROP COLUMN "description",
ADD COLUMN     "description" VARCHAR(255)[];
