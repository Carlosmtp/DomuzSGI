/*
  Warnings:

  - You are about to drop the column `periodicity` on the `objetive_indicators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "objetive_indicators" DROP COLUMN "periodicity",
ADD COLUMN     "periodicityId" INTEGER;
