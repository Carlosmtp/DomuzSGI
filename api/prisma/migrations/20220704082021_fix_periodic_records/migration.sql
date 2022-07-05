/*
  Warnings:

  - Changed the type of `record_date` on the `periodic_records` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "periodic_records" DROP COLUMN "record_date",
ADD COLUMN     "record_date" DATE NOT NULL;
