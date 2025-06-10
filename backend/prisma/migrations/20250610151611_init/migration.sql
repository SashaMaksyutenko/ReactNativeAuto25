/*
  Warnings:

  - You are about to drop the column `feature` on the `car` table. All the data in the column will be lost.
  - Added the required column `features` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" DROP COLUMN "feature",
ADD COLUMN     "features" JSONB NOT NULL;
