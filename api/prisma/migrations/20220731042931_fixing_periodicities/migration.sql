/*
  Warnings:

  - You are about to drop the column `periodicity` on the `process_indicators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "process_indicators" DROP COLUMN "periodicity",
ADD COLUMN     "periodicityId" INTEGER;

-- CreateTable
CREATE TABLE "periodicities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "periodicities_pkey" PRIMARY KEY ("id")
);
