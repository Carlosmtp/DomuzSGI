/*
  Warnings:

  - A unique constraint covering the columns `[clasificationId,typeId]` on the table `aux_portfolios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "aux_portfolios_clasificationId_typeId_key" ON "aux_portfolios"("clasificationId", "typeId");
