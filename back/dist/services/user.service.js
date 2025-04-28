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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = exports.checkUserExists = void 0;
const user_repository_1 = require("../repositories/user.repository");
const errors_1 = require("../utils/errors");
const credential_service_1 = require("./credential.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../config/envs");
const checkUserExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.UserRepository.findOneBy({ email });
    return !!user;
});
exports.checkUserExists = checkUserExists;
const registerUserService = (registerUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.UserRepository.create(registerUserDto);
    yield user_repository_1.UserRepository.save(user);
    const credential = yield (0, credential_service_1.createCredentialService)({
        password: registerUserDto.password,
    });
    user.credential = credential;
    yield user_repository_1.UserRepository.save(user);
    return user;
});
exports.registerUserService = registerUserService;
const loginUserService = (loginUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.UserRepository.findOne({
        where: {
            email: loginUserDto.email,
        },
        relations: ["credential", "orders"],
    });
    if (!user)
        throw new Error("User not found");
    if (yield (0, credential_service_1.checkPasswordService)(loginUserDto.password, user.credential.password)) {
        const _a = user.credential, { password } = _a, safeCredential = __rest(_a, ["password"]);
        const safeUser = Object.assign(Object.assign({}, user), { credential: safeCredential });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, envs_1.JWT_SECRET);
        return {
            user: safeUser,
            token,
        };
    }
    else {
        throw new errors_1.ClientError("Invalid password");
    }
});
exports.loginUserService = loginUserService;
