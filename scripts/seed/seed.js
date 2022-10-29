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
var client_1 = require("@prisma/client");
var axios_1 = require("axios");
var modelBuilder_1 = require("./modelBuilder");
var dbFactory_1 = require("./dbFactory");
var prisma = new client_1.PrismaClient();
var _a = (0, dbFactory_1["default"])(prisma), createRelations = _a.createRelations, dropAllTables = _a.dropAllTables, dbDisconnect = _a.dbDisconnect, modelCreateMany = _a.modelCreateMany;
var swapiBaseUrl = 'https://swapi.dev/api/';
var endPoints = [
    'people',
    'planets',
    'films',
    'starships',
    'vehicles',
    'species',
];
var currentPage = 1;
var totalPages;
var updateTotalPages = function (count, results) {
    return Math.ceil(count / results);
};
var fetchData = function (endPoint) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get("".concat(swapiBaseUrl).concat(endPoint, "/?page=").concat(currentPage))];
            case 1:
                res = _a.sent();
                console.log(currentPage);
                return [2 /*return*/, res.data];
        }
    });
}); };
var fetchAll = function (endPoint, model, modelBuilder) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, res, count, results;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetchData(endPoint)];
            case 1:
                _a = _b.sent(), res = _a.results, count = _a.count;
                currentPage++;
                totalPages = updateTotalPages(count, res.length);
                return [4 /*yield*/, modelCreateMany(model, modelBuilder(res))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                if (!(currentPage <= totalPages)) return [3 /*break*/, 6];
                return [4 /*yield*/, fetchData(endPoint)];
            case 4:
                results = (_b.sent()).results;
                return [4 /*yield*/, modelCreateMany(model, modelBuilder(results))];
            case 5:
                _b.sent();
                currentPage++;
                return [3 /*break*/, 3];
            case 6:
                currentPage = 1;
                return [2 /*return*/];
        }
    });
}); };
var getDataAndSeed = function (endPoint) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = endPoint;
                switch (_a) {
                    case 'people': return [3 /*break*/, 1];
                    case 'planets': return [3 /*break*/, 3];
                    case 'films': return [3 /*break*/, 5];
                    case 'starships': return [3 /*break*/, 7];
                    case 'vehicles': return [3 /*break*/, 9];
                    case 'species': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 13];
            case 1: return [4 /*yield*/, fetchAll('people', 'character', modelBuilder_1.buildCharacterData)];
            case 2:
                _b.sent();
                return [3 /*break*/, 13];
            case 3: return [4 /*yield*/, fetchAll(endPoint, 'planet', modelBuilder_1.buildPlanetData)];
            case 4:
                _b.sent();
                return [3 /*break*/, 13];
            case 5: return [4 /*yield*/, fetchAll(endPoint, 'film', modelBuilder_1.buildFilmData)];
            case 6:
                _b.sent();
                return [3 /*break*/, 13];
            case 7: return [4 /*yield*/, fetchAll(endPoint, 'starship', modelBuilder_1.buildStarshipData)];
            case 8:
                _b.sent();
                return [3 /*break*/, 13];
            case 9: return [4 /*yield*/, fetchAll(endPoint, 'vehicle', modelBuilder_1.buildVehicleData)];
            case 10:
                _b.sent();
                return [3 /*break*/, 13];
            case 11: return [4 /*yield*/, fetchAll(endPoint, 'specie', modelBuilder_1.buildSpeciesData)];
            case 12:
                _b.sent();
                _b.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, endPoints_1, endPoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dropAllTables()];
            case 1:
                _a.sent();
                _i = 0, endPoints_1 = endPoints;
                _a.label = 2;
            case 2:
                if (!(_i < endPoints_1.length)) return [3 /*break*/, 5];
                endPoint = endPoints_1[_i];
                return [4 /*yield*/, getDataAndSeed(endPoint)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                console.log('fetch done');
                return [4 /*yield*/, createRelations()];
            case 6:
                _a.sent();
                console.log('seed done');
                return [2 /*return*/];
        }
    });
}); };
main()["catch"](function (e) { return console.log(e); })["finally"](function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, dbDisconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
