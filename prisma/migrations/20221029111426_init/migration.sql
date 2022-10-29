-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" DOUBLE PRECISION,
    "mass" DOUBLE PRECISION,
    "hair_color" TEXT,
    "skin_color" TEXT,
    "eye_color" TEXT,
    "birth_year" TEXT,
    "gender" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "planetSwapiId" TEXT[],
    "filmSwapiId" TEXT[],
    "specieSwapiId" TEXT[],
    "vehicleSwapiId" TEXT[],
    "starshipSwapiId" TEXT[],
    "speciesId" TEXT,
    "planetId" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "rotation_period" TEXT,
    "orbital_period" TEXT,
    "diameter" DOUBLE PRECISION,
    "climate" TEXT,
    "gravity" TEXT,
    "terrain" TEXT,
    "surface_water" DOUBLE PRECISION,
    "population" DOUBLE PRECISION,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "characterSwapiId" TEXT[],
    "filmSwapiId" TEXT[],

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "episode_id" INTEGER,
    "opening_crawl" TEXT,
    "director" TEXT,
    "producer" TEXT,
    "release_date" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "characterSwapiId" TEXT[],
    "planetSwapiID" TEXT[],
    "starshipSwapiId" TEXT[],
    "vehicleSwapiId" TEXT[],
    "specieSwapiId" TEXT[],

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "model" TEXT,
    "manufacturer" TEXT,
    "cost_in_credits" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "max_atmosphering_speed" TEXT,
    "crew" TEXT,
    "passengers" DOUBLE PRECISION,
    "cargo_capacity" DOUBLE PRECISION,
    "consumables" TEXT,
    "hyperdrive_rating" TEXT,
    "MGLT" DOUBLE PRECISION,
    "starship_class" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "characterSwapiId" TEXT[],
    "filmSwapiId" TEXT[],

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "model" TEXT,
    "manufacturer" TEXT,
    "cost_in_credits" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "max_atmosphering_speed" DOUBLE PRECISION,
    "crew" TEXT,
    "passengers" DOUBLE PRECISION,
    "cargo_capacity" DOUBLE PRECISION,
    "consumables" TEXT,
    "vehicle_class" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "characterSwapiId" TEXT[],
    "filmSwapiId" TEXT[],

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classification" TEXT,
    "designation" TEXT,
    "average_height" DOUBLE PRECISION,
    "skin_colors" TEXT,
    "hair_colors" TEXT,
    "eye_colors" TEXT,
    "average_lifespan" DOUBLE PRECISION,
    "homeworld" TEXT,
    "language" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3) NOT NULL,
    "swapiId" TEXT NOT NULL,
    "characterSwapiId" TEXT[],
    "filmSwapiId" TEXT[],
    "planetSwapiId" TEXT[],

    CONSTRAINT "Specie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToFilm" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToPlanet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToSpecie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_swapiId_key" ON "Character"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "Planet_swapiId_key" ON "Planet"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "Film_swapiId_key" ON "Film"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "Starship_swapiId_key" ON "Starship"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_swapiId_key" ON "Vehicle"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "Specie_swapiId_key" ON "Specie"("swapiId");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFilm_AB_unique" ON "_CharacterToFilm"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFilm_B_index" ON "_CharacterToFilm"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToVehicle_AB_unique" ON "_CharacterToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToVehicle_B_index" ON "_CharacterToVehicle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToStarship_AB_unique" ON "_CharacterToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToStarship_B_index" ON "_CharacterToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToPlanet_AB_unique" ON "_FilmToPlanet"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToPlanet_B_index" ON "_FilmToPlanet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToStarship_AB_unique" ON "_FilmToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToStarship_B_index" ON "_FilmToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToVehicle_AB_unique" ON "_FilmToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToVehicle_B_index" ON "_FilmToVehicle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToSpecie_AB_unique" ON "_FilmToSpecie"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToSpecie_B_index" ON "_FilmToSpecie"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Specie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFilm" ADD CONSTRAINT "_CharacterToFilm_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFilm" ADD CONSTRAINT "_CharacterToFilm_B_fkey" FOREIGN KEY ("B") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToVehicle" ADD CONSTRAINT "_CharacterToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToVehicle" ADD CONSTRAINT "_CharacterToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToStarship" ADD CONSTRAINT "_CharacterToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToStarship" ADD CONSTRAINT "_CharacterToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_B_fkey" FOREIGN KEY ("B") REFERENCES "Planet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToVehicle" ADD CONSTRAINT "_FilmToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToVehicle" ADD CONSTRAINT "_FilmToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToSpecie" ADD CONSTRAINT "_FilmToSpecie_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToSpecie" ADD CONSTRAINT "_FilmToSpecie_B_fkey" FOREIGN KEY ("B") REFERENCES "Specie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
