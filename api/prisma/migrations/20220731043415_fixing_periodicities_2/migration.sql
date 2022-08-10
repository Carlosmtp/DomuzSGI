/*
  Warnings:

  - Made the column `periodicityId` on table `process_indicators` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "process_indicators" ALTER COLUMN "periodicityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "process_indicators" ADD CONSTRAINT "process_indicators_periodicityId_fkey" FOREIGN KEY ("periodicityId") REFERENCES "periodicities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
