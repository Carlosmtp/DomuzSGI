/*
  Warnings:

  - A unique constraint covering the columns `[nit]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "companies_nit_key" ON "companies"("nit");
