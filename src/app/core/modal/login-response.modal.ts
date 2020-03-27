
export class LoginResponse {

    private _jwtToken: string;
    private _accountName: string;
    private _email: string;
    private _userid: string;
    private _roles: any[];
    private _expires_in: number;
    private _jti: string;
    private _scope: string;
    private _token_type: string;

    get jwtToken(): string {
        return this._jwtToken;
    }

    set jwtToken(value: string) {
        this._jwtToken = value;
    }

    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }
    get userid(): string {
        return this._userid;
    }

    set userid(value: string) {
        this._userid = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get authorities(): any[] {
        return this._roles;
    }

    set authorities(value: any[]) {
        this._roles = value;
    }

    get expires_in(): number {
        return this._expires_in;
    }

    set expires_in(value: number) {
        this._expires_in = value;
    }

    get jti(): string {
        return this._jti;
    }

    set jti(value: string) {
        this._jti = value;
    }

    get scope(): string {
        return this._scope;
    }

    set scope(value: string) {
        this._scope = value;
    }

    get token_type(): string {
        return this._token_type;
    }

    set token_type(value: string) {
        this._token_type = value;
    }
}
