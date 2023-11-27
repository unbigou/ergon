/*
  Warnings:

  - You are about to drop the column `birthDate` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "birthDate",
DROP COLUMN "cpf",
DROP COLUMN "gender";
