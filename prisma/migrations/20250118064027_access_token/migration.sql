-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "access_token" VARCHAR(256) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "access_token" VARCHAR(256) NOT NULL DEFAULT '';
