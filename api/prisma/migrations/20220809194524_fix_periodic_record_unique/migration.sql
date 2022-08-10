/*
  Warnings:

  - A unique constraint covering the columns `[indicatorId,record_date]` on the table `periodic_records` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "periodic_records_indicatorId_record_date_key" ON "periodic_records"("indicatorId", "record_date");
