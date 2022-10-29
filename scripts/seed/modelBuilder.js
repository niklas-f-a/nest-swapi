"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.buildSpeciesData = exports.buildVehicleData = exports.buildStarshipData = exports.buildFilmData = exports.buildPlanetData = exports.buildCharacterData = void 0;
var extractIdFromUrl = function () {
    var urls = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        urls[_i] = arguments[_i];
    }
    return urls.map(function (url) { return url.replace(/\D/g, ''); });
};
var buildCharacterData = function (characters) {
    return characters.map(function (character) {
        var homeworld = character.homeworld, films = character.films, species = character.species, vehicles = character.vehicles, starships = character.starships, created = character.created, edited = character.edited, url = character.url, height = character.height, mass = character.mass, rest = __rest(character, ["homeworld", "films", "species", "vehicles", "starships", "created", "edited", "url", "height", "mass"]);
        var charSwapiId = extractIdFromUrl(url);
        var planetSwapiId = extractIdFromUrl(homeworld);
        var filmSwapiId = extractIdFromUrl.apply(void 0, films);
        var specieSwapiId = extractIdFromUrl.apply(void 0, species);
        var vehicleSwapiId = extractIdFromUrl.apply(void 0, vehicles);
        var starshipSwapiId = extractIdFromUrl.apply(void 0, starships);
        return __assign(__assign({}, rest), { mass: +mass, height: +height, swapiId: charSwapiId[0], planetSwapiId: planetSwapiId, filmSwapiId: filmSwapiId, specieSwapiId: specieSwapiId, vehicleSwapiId: vehicleSwapiId, starshipSwapiId: starshipSwapiId });
    });
};
exports.buildCharacterData = buildCharacterData;
var buildPlanetData = function (planets) {
    return planets.map(function (planet) {
        var residents = planet.residents, films = planet.films, rotation_period = planet.rotation_period, orbital_period = planet.orbital_period, surface_water = planet.surface_water, diameter = planet.diameter, population = planet.population, created = planet.created, edited = planet.edited, url = planet.url, rest = __rest(planet, ["residents", "films", "rotation_period", "orbital_period", "surface_water", "diameter", "population", "created", "edited", "url"]);
        return __assign(__assign({}, rest), { rotation_period: rotation_period, orbital_period: orbital_period, diameter: +diameter, surface_water: +surface_water, population: +population, characterSwapiId: residents.length !== 0 ? extractIdFromUrl.apply(void 0, residents) : undefined, filmSwapiId: films.length !== 0 ? extractIdFromUrl.apply(void 0, films) : undefined, swapiId: url.replace(/\D/g, '') });
    });
};
exports.buildPlanetData = buildPlanetData;
var buildFilmData = function (films) {
    return films.map(function (film) {
        var characters = film.characters, planets = film.planets, starships = film.starships, vehicles = film.vehicles, species = film.species, created = film.created, edited = film.edited, url = film.url, rest = __rest(film, ["characters", "planets", "starships", "vehicles", "species", "created", "edited", "url"]);
        return __assign(__assign({}, rest), { characterSwapiId: extractIdFromUrl.apply(void 0, characters), planetSwapiID: extractIdFromUrl.apply(void 0, planets), starshipSwapiId: extractIdFromUrl.apply(void 0, starships), vehicleSwapiId: extractIdFromUrl.apply(void 0, vehicles), specieSwapiId: extractIdFromUrl.apply(void 0, species), swapiId: extractIdFromUrl(url)[0] });
    });
};
exports.buildFilmData = buildFilmData;
var buildStarshipData = function (starships) {
    return starships.map(function (starship) {
        var pilots = starship.pilots, films = starship.films, cost_in_credits = starship.cost_in_credits, length = starship.length, passengers = starship.passengers, cargo_capacity = starship.cargo_capacity, MGLT = starship.MGLT, created = starship.created, edited = starship.edited, url = starship.url, rest = __rest(starship, ["pilots", "films", "cost_in_credits", "length", "passengers", "cargo_capacity", "MGLT", "created", "edited", "url"]);
        return __assign(__assign({}, rest), { cost_in_credits: +cost_in_credits, length: +length, passengers: +passengers, cargo_capacity: +cargo_capacity, MGLT: +MGLT, characterSwapiId: extractIdFromUrl.apply(void 0, pilots), filmSwapiId: extractIdFromUrl.apply(void 0, films), swapiId: extractIdFromUrl(url)[0] });
    });
};
exports.buildStarshipData = buildStarshipData;
var buildVehicleData = function (vehicles) {
    return vehicles.map(function (vehicle) {
        var pilots = vehicle.pilots, films = vehicle.films, cost_in_credits = vehicle.cost_in_credits, length = vehicle.length, max_atmosphering_speed = vehicle.max_atmosphering_speed, cargo_capacity = vehicle.cargo_capacity, passengers = vehicle.passengers, created = vehicle.created, edited = vehicle.edited, url = vehicle.url, rest = __rest(vehicle, ["pilots", "films", "cost_in_credits", "length", "max_atmosphering_speed", "cargo_capacity", "passengers", "created", "edited", "url"]);
        return __assign(__assign({}, rest), { cost_in_credits: +cost_in_credits, passengers: +passengers, length: +length, cargo_capacity: +cargo_capacity, max_atmosphering_speed: +max_atmosphering_speed, characterSwapiId: extractIdFromUrl.apply(void 0, pilots), filmSwapiId: extractIdFromUrl.apply(void 0, films), swapiId: extractIdFromUrl(url)[0] });
    });
};
exports.buildVehicleData = buildVehicleData;
var buildSpeciesData = function (species) {
    return species.map(function (specie) {
        var homeworld = specie.homeworld, people = specie.people, films = specie.films, average_height = specie.average_height, average_lifespan = specie.average_lifespan, created = specie.created, edited = specie.edited, url = specie.url, rest = __rest(specie, ["homeworld", "people", "films", "average_height", "average_lifespan", "created", "edited", "url"]);
        return __assign(__assign({}, rest), { planetSwapiId: !!homeworld ? extractIdFromUrl(homeworld)[0] : [], characterSwapiId: extractIdFromUrl.apply(void 0, people), filmSwapiId: extractIdFromUrl.apply(void 0, films), swapiId: extractIdFromUrl(url)[0], average_height: +average_height, average_lifespan: +average_lifespan });
    });
};
exports.buildSpeciesData = buildSpeciesData;
