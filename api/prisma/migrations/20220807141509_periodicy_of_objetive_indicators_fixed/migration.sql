/*
  Warnings:

  - Made the column `periodicityId` on table `objetive_indicators` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "objetive_indicators" ALTER COLUMN "periodicityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "objetive_indicators" ADD CONSTRAINT "objetive_indicators_periodicityId_fkey" FOREIGN KEY ("periodicityId") REFERENCES "periodicities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
