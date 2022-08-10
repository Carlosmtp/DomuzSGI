-- CreateTable
CREATE TABLE "process_periodic_records" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,
    "processId" INTEGER NOT NULL,

    CONSTRAINT "process_periodic_records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "process_periodic_records" ADD CONSTRAINT "process_periodic_records_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
