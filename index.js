const xblauth = require('@xboxreplay/xboxlive-auth');

class dashAuthenticate {
	constructor(email, password) {
		try { return xblauth.authenticate(email, password); } catch (e) { throw e; }
	}
}

module.exports = { dashAuthenticate };