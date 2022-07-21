/*
  Warnings:

  - Made the column `efficiency` on table `periodic_records` required. This step will fail if there are existing NULL values in that column.
  - Made the column `goal` on table `periodic_records` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `periodic_records` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "periodic_records" ALTER COLUMN "efficiency" SET NOT NULL,
ALTER COLUMN "goal" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL;
