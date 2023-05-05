"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relayingParties = exports.dashAuthenticate = void 0;
const xboxlive_auth_1 = require("@xboxreplay/xboxlive-auth");
class rp {
    constructor() {
        this.mcbe = "https://pocket.realms.minecraft.net/";
        this.xbl = "http://xboxlive.com/";
    }
}
function dashAuthenticate(email, password, relayingParty = "https://pocket.realms.minecraft.net/") {
    try {
        return (0, xboxlive_auth_1.authenticate)(email, password, { XSTSRelyingParty: relayingParty });
    }
    catch (e) {
        throw e;
    }
}
exports.dashAuthenticate = dashAuthenticate;
const relayingParties = new rp();
exports.relayingParties = relayingParties;
