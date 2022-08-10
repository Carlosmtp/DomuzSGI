/*
  Warnings:

  - You are about to drop the `process_periodic_records` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "process_periodic_records" DROP CONSTRAINT "process_periodic_records_processId_fkey";

-- DropTable
DROP TABLE "process_periodic_records";

-- CreateTable
CREATE TABLE "process_reports" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,
    "processId" INTEGER NOT NULL,
    "goal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "process_reports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "process_reports" ADD CONSTRAINT "process_reports_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
