const xblauth = require('@xboxreplay/xboxlive-auth');

class dashAuthenticate {
	constructor(email, password) {
		try { return xblauth.authenticate(email, password, { XSTSRelyingParty: "https://pocket.realms.minecraft.net/" }); } catch (e) { throw e; }
	}
}

module.exports = { dashAuthenticate };
