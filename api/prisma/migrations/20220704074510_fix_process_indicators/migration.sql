/*
  Warnings:

  - Made the column `goal` on table `process_indicators` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "process_indicators" ALTER COLUMN "goal" SET NOT NULL;
