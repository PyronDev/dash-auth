"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashAuthenticate = void 0;
var xboxlive_auth_1 = require("@xboxreplay/xboxlive-auth");
function dashAuthenticate(email, password) {
    try {
        return (0, xboxlive_auth_1.authenticate)(email, password, { XSTSRelyingParty: "https://pocket.realms.minecraft.net/" });
    }
    catch (e) {
        throw e;
    }
}
exports.dashAuthenticate = dashAuthenticate;
