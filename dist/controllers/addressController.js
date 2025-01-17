"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AddressTypeController = void 0;
var tsoa_1 = require("tsoa");
var nodejs_postgres_client_1 = require("@nodejs-postgres-client");
var addressType_1 = require("@nodejs-postgres-client/lib/models/addressType");
var AddressTypeController = /** @class */ (function (_super) {
    __extends(AddressTypeController, _super);
    function AddressTypeController() {
        var _this = _super.call(this) || this;
        _this.setEntityName('addressType'); // for audit logging
        return _this;
    }
    AddressTypeController.prototype.listAddressTypes = function (includeAll, req) {
        if (includeAll === void 0) { includeAll = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 200 is the default response code when no exceptions occur, so no need to call this.setStatus()
                this.setUser(req);
                this.checkLogin();
                return [2 /*return*/, addressType_1.AddressType.findAll({
                        attributes: { exclude: nodejs_postgres_client_1.defaultExcludeAttributes },
                        paranoid: !includeAll
                    })];
            });
        });
    };
    __decorate([
        (0, tsoa_1.Security)('jwt'),
        (0, tsoa_1.SuccessResponse)(200, 'OK'),
        (0, tsoa_1.Get)(),
        (0, tsoa_1.OperationId)('listAddressTypes'),
        __param(0, (0, tsoa_1.Query)()),
        __param(1, (0, tsoa_1.Request)())
    ], AddressTypeController.prototype, "listAddressTypes");
    AddressTypeController = __decorate([
        (0, tsoa_1.Tags)('General'),
        (0, tsoa_1.Route)('v1/address-types'),
        (0, tsoa_1.Response)(400, 'Bad request'),
        (0, tsoa_1.Response)(401, 'Unauthorized'),
        (0, tsoa_1.Response)(405, 'Method not authorized'),
        (0, tsoa_1.Response)(429, 'Too many requests')
    ], AddressTypeController);
    return AddressTypeController;
}(nodejs_postgres_client_1.NCController));
exports.AddressTypeController = AddressTypeController;
