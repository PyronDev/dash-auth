interface RelayingParties {
    mcbe: string;
    xbl: string;
}
declare class rp implements RelayingParties {
    mcbe: string;
    xbl: string;
    constructor();
}
declare function comboAuthenticate(email: string, password: string, relayingParty?: string): Promise<{
    token: import("@xboxreplay/xboxlive-auth").CredentialsAuthenticateResponse;
    args: string[];
    isCombo: boolean;
}>;
declare function msaCodeAuthenticate(...args: []): Promise<{
    args: [];
    token: {
        xuid: string;
        user_hash: string;
        xsts_token: string;
        expires_on: number;
    };
    isCombo: boolean;
}>;
declare const relayingParties: rp;
export { comboAuthenticate, msaCodeAuthenticate, relayingParties };
