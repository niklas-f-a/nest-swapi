"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Model;
(function (Model) {
    Model["CHARACTER"] = "character";
    Model["PLANET"] = "planet";
    Model["FILM"] = "film";
    Model["STARSHIP"] = "starship";
    Model["VEHICLE"] = "vehicle";
    Model["SPECIE"] = "specie";
})(Model || (Model = {}));
exports["default"] = (function (prisma) {
    var dbDisconnect = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$disconnect()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var modelCreateMany = function (model, data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma[model].createMany({ data: data })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var formatConnect = function (model, swapiIds) { return __awaiter(void 0, void 0, void 0, function () {
        var ids, _i, swapiIds_1, swapiId, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ids = [];
                    _i = 0, swapiIds_1 = swapiIds;
                    _a.label = 1;
                case 1:
                    if (!(_i < swapiIds_1.length)) return [3 /*break*/, 4];
                    swapiId = swapiIds_1[_i];
                    return [4 /*yield*/, prisma[model].findUnique({
                            where: { swapiId: swapiId }
                        })];
                case 2:
                    id = (_a.sent()).id;
                    ids.push({ id: id });
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, ids];
            }
        });
    }); };
    var dropAllTables = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        prisma.character.deleteMany({}),
                        prisma.film.deleteMany({}),
                        prisma.planet.deleteMany({}),
                        prisma.specie.deleteMany({}),
                        prisma.starship.deleteMany({}),
                        prisma.vehicle.deleteMany({}),
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var createSpecieRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, specie, _a, _b;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, prisma.specie.count()];
                case 1:
                    count = _g.sent();
                    i = 1;
                    _g.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 8];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.specie.findUnique({ where: { swapiId: swapiId } })];
                case 3:
                    specie = _g.sent();
                    if (!specie) return [3 /*break*/, 7];
                    _b = (_a = prisma.specie).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.CHARACTER, specie.characterSwapiId)];
                case 4:
                    _d.people = (_e.connect = _g.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.FILM, specie.filmSwapiId)];
                case 5: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.films = (_f.connect = _g.sent(),
                            _f),
                            _d),
                            _c)])];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var createVehicleRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, vehicle, _a, _b;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, prisma.vehicle.count()];
                case 1:
                    count = _g.sent();
                    i = 1;
                    _g.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 8];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.vehicle.findUnique({ where: { swapiId: swapiId } })];
                case 3:
                    vehicle = _g.sent();
                    if (!vehicle) return [3 /*break*/, 7];
                    _b = (_a = prisma.vehicle).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.CHARACTER, vehicle.characterSwapiId)];
                case 4:
                    _d.pilots = (_e.connect = _g.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.FILM, vehicle.filmSwapiId)];
                case 5: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.films = (_f.connect = _g.sent(),
                            _f),
                            _d),
                            _c)])];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var createStarshipRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, starship, _a, _b;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, prisma.starship.count()];
                case 1:
                    count = _g.sent();
                    i = 1;
                    _g.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 8];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.starship.findUnique({ where: { swapiId: swapiId } })];
                case 3:
                    starship = _g.sent();
                    if (!starship) return [3 /*break*/, 7];
                    _b = (_a = prisma.starship).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.CHARACTER, starship.characterSwapiId)];
                case 4:
                    _d.pilots = (_e.connect = _g.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.FILM, starship.filmSwapiId)];
                case 5: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.films = (_f.connect = _g.sent(),
                            _f),
                            _d),
                            _c)])];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var createFilmRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, film, _a, _b;
        var _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, prisma.film.count()];
                case 1:
                    count = _k.sent();
                    i = 1;
                    _k.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 11];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.film.findUnique({ where: { swapiId: swapiId } })];
                case 3:
                    film = _k.sent();
                    if (!film) return [3 /*break*/, 10];
                    _b = (_a = prisma.film).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.CHARACTER, film.characterSwapiId)];
                case 4:
                    _d.characters = (_e.connect = _k.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.PLANET, film.planetSwapiID)];
                case 5:
                    _d.planets = (_f.connect = _k.sent(),
                        _f);
                    _g = {};
                    return [4 /*yield*/, formatConnect(Model.STARSHIP, film.starshipSwapiId)];
                case 6:
                    _d.starships = (_g.connect = _k.sent(),
                        _g);
                    _h = {};
                    return [4 /*yield*/, formatConnect(Model.VEHICLE, film.vehicleSwapiId)];
                case 7:
                    _d.vehicles = (_h.connect = _k.sent(),
                        _h);
                    _j = {};
                    return [4 /*yield*/, formatConnect(Model.SPECIE, film.specieSwapiId)];
                case 8: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.species = (_j.connect = _k.sent(),
                            _j),
                            _d),
                            _c)])];
                case 9:
                    _k.sent();
                    _k.label = 10;
                case 10:
                    i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    var createPlanetRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, planet, _a, _b;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, prisma.planet.count()];
                case 1:
                    count = _g.sent();
                    i = 1;
                    _g.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 8];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.planet.findUnique({ where: { swapiId: swapiId } })];
                case 3:
                    planet = _g.sent();
                    if (!planet) return [3 /*break*/, 7];
                    _b = (_a = prisma.planet).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.CHARACTER, planet.characterSwapiId)];
                case 4:
                    _d.residents = (_e.connect = _g.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.FILM, planet.filmSwapiId)];
                case 5: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.films = (_f.connect = _g.sent(),
                            _f),
                            _d),
                            _c)])];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var createCharacterRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, i, swapiId, character, _a, _b;
        var _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    console.log('relate');
                    return [4 /*yield*/, prisma.character.count()];
                case 1:
                    count = _k.sent();
                    i = 1;
                    _k.label = 2;
                case 2:
                    if (!(i <= count)) return [3 /*break*/, 11];
                    swapiId = String(i);
                    return [4 /*yield*/, prisma.character.findUnique({
                            where: { swapiId: swapiId }
                        })];
                case 3:
                    character = _k.sent();
                    if (!character) return [3 /*break*/, 10];
                    _b = (_a = prisma.character).update;
                    _c = {
                        where: { swapiId: swapiId }
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, formatConnect(Model.PLANET, character.planetSwapiId)[0]];
                case 4:
                    _d.homeworld = (_e.connect = _k.sent(),
                        _e);
                    _f = {};
                    return [4 /*yield*/, formatConnect(Model.SPECIE, character.specieSwapiId)[0]];
                case 5:
                    _d.species = (_f.connect = _k.sent(),
                        _f);
                    _g = {};
                    return [4 /*yield*/, formatConnect(Model.FILM, character.filmSwapiId)];
                case 6:
                    _d.films = (_g.connect = _k.sent(),
                        _g);
                    _h = {};
                    return [4 /*yield*/, formatConnect(Model.VEHICLE, character.vehicleSwapiId)];
                case 7:
                    _d.vehicles = (_h.connect = _k.sent(),
                        _h);
                    _j = {};
                    return [4 /*yield*/, formatConnect(Model.STARSHIP, character.starshipSwapiId)];
                case 8: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.starships = (_j.connect = _k.sent(),
                            _j),
                            _d),
                            _c)])];
                case 9:
                    _k.sent();
                    _k.label = 10;
                case 10:
                    i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    var createRelations = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('relating');
                    return [4 /*yield*/, createSpecieRelations()];
                case 1:
                    _a.sent();
                    console.log('relating');
                    return [4 /*yield*/, createVehicleRelations()];
                case 2:
                    _a.sent();
                    console.log('relating');
                    return [4 /*yield*/, createStarshipRelations()];
                case 3:
                    _a.sent();
                    console.log('relating');
                    return [4 /*yield*/, createFilmRelations()];
                case 4:
                    _a.sent();
                    console.log('relating');
                    return [4 /*yield*/, createPlanetRelations()];
                case 5:
                    _a.sent();
                    console.log('relating');
                    return [4 /*yield*/, createCharacterRelations()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        createRelations: createRelations,
        dropAllTables: dropAllTables,
        dbDisconnect: dbDisconnect,
        modelCreateMany: modelCreateMany
    };
});
