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
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayingParties = exports.msaCodeAuthenticate = exports.comboAuthenticate = void 0;
const xboxlive_auth_1 = require("@xboxreplay/xboxlive-auth");
const prismarine_auth_1 = require("prismarine-auth");
class rp {
    constructor() {
        this.mcbe = "https://pocket.realms.minecraft.net";
        this.xbl = "http://xboxlive.com";
    }
}
function comboAuthenticate(email, password, relayingParty = "https://pocket.realms.minecraft.net/") {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return { token: yield (0, xboxlive_auth_1.authenticate)(email, password, { XSTSRelyingParty: relayingParty }), args: [email, password, relayingParty], isCombo: true };
        }
        catch (e) {
            throw e;
        }
    });
}
exports.comboAuthenticate = comboAuthenticate;
function msaCodeAuthenticate(...args) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let authflow = new prismarine_auth_1.Authflow(...args);
            let token = yield authflow.getXboxToken();
            return { args, token: { xuid: token.userXUID, user_hash: token.userHash, xsts_token: token.XSTSToken, expires_on: token.expiresOn }, isCombo: false };
        }
        catch (e) {
            throw e;
        }
    });
}
exports.msaCodeAuthenticate = msaCodeAuthenticate;
const relayingParties = new rp();
exports.relayingParties = relayingParties;
