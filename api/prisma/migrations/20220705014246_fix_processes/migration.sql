/*
  Warnings:

  - Made the column `goal` on table `processes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "processes" ALTER COLUMN "goal" SET NOT NULL;
