interface RelayingParties {
    mcbe: string;
    xbl: string;
}
declare class rp implements RelayingParties {
    mcbe: string;
    xbl: string;
    constructor();
}
declare function dashAuthenticate(email: string, password: string, relayingParty?: string): Promise<import("@xboxreplay/xboxlive-auth").CredentialsAuthenticateResponse>;
declare const relayingParties: rp;
export { dashAuthenticate, relayingParties };
