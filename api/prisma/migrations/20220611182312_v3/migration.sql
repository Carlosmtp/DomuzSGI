/*
  Warnings:

  - A unique constraint covering the columns `[person_id]` on the table `people` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "people_person_id_key" ON "people"("person_id");
