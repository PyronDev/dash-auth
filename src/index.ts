import { authenticate } from '@xboxreplay/xboxlive-auth';

function dashAuthenticate(email: string, password: string) {
	try { return authenticate(email, password, { XSTSRelyingParty: "https://pocket.realms.minecraft.net/" }); } catch (e) { throw e; }
}

export { dashAuthenticate }