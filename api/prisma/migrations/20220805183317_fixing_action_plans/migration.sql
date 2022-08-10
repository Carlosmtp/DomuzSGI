/*
  Warnings:

  - Added the required column `delivery_date` to the `action_plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "action_plans" ADD COLUMN     "delivery_date" DATE NOT NULL;
