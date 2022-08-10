/*
  Warnings:

  - A unique constraint covering the columns `[date,processId]` on the table `process_reports` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "process_reports_date_processId_key" ON "process_reports"("date", "processId");
