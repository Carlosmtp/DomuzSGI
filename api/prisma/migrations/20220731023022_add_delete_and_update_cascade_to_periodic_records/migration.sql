-- DropForeignKey
ALTER TABLE "periodic_records" DROP CONSTRAINT "periodic_records_indicatorId_fkey";

-- AddForeignKey
ALTER TABLE "periodic_records" ADD CONSTRAINT "periodic_records_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "process_indicators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
