-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "swapiId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Film" ALTER COLUMN "swapiId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Planet" ALTER COLUMN "swapiId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Specie" ALTER COLUMN "swapiId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Starship" ALTER COLUMN "swapiId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "swapiId" DROP NOT NULL;
