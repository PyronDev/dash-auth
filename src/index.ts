import { authenticate } from '@xboxreplay/xboxlive-auth';
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

function dashAuthenticate(email: string, password: string, relayingParty: string = "https://pocket.realms.minecraft.net/") {
	try { return authenticate(email, password, { XSTSRelyingParty: relayingParty }); } catch (e) { throw e; }
}
const relayingParties = new rp();
export { dashAuthenticate, relayingParties };