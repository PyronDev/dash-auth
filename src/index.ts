import { authenticate } from '@xboxreplay/xboxlive-auth';
import { Authflow } from 'prismarine-auth';

interface RelayingParties {
	mcbe: string;
	xbl: string;
}
class rp implements RelayingParties {
	mcbe: string;
	xbl: string;
	constructor() {
		this.mcbe = "https://pocket.realms.minecraft.net/";
		this.xbl = "http://xboxlive.com/";
	}
}

async function comboAuthenticate(email: string, password: string, relayingParty: string = "https://pocket.realms.minecraft.net/") {
	try { return { token: await authenticate(email, password, { XSTSRelyingParty: relayingParty }), args: [email, password, relayingParty], isCombo: true }; } catch (e) { throw e; }
}

async function msaCodeAuthenticate(...args: []) {
	try {
		let authflow = new Authflow(...args);
		let token = await authflow.getXboxToken();
		return { args, token: { xuid: token.userXUID, user_hash: token.userHash, xsts_token: token.XSTSToken, expires_on: token.expiresOn }, isCombo: false };
	} catch (e) { throw e; }
}

const relayingParties = new rp();
export { comboAuthenticate, msaCodeAuthenticate, relayingParties };