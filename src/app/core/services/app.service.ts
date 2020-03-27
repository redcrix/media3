import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {LoginResponse} from '../modal/login-response.modal';

export const CURRENT_USER = 'hour4u-app-current-user';
export const redirectUrl = 'redirectUrl';

@Injectable({
    providedIn: 'root'
  })
export class AppService {
    redirectURL: string;

    private currentUserSubject = new BehaviorSubject<LoginResponse>(new LoginResponse());
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    constructor() {
        try {
          const currentAccount = JSON.parse(localStorage.getItem(CURRENT_USER));
            if (currentAccount != null) {
                this.currentUserSubject.next(currentAccount);
            }
        } catch (e) {
        }
        this.redirectURL = localStorage.getItem(redirectUrl);
    }

    destroy(): void {
        // localStorage.setItem(CURRENT_USER, JSON.stringify(this.getCurrentAccount()));
        localStorage.setItem(redirectUrl, this.redirectURL);
    }

  getCurrentAccount(): LoginResponse {
        return this.currentUserSubject.getValue();
    }

    getCurrentAccountSubject(): Observable<LoginResponse> {
        return this.currentUserSubject;
    }

    setRedirectURL (url: string) {
        this.redirectURL = url;
    }
    getRedirectURL() {
        return (this.redirectURL ? this.redirectURL : '/home');
    }

    getToken(): string {
        return this.getCurrentAccount().token_type + ' ' + this.getCurrentAccount().token_type;
    }

    setCurrentAccount(credential: any) {
        localStorage.setItem(CURRENT_USER, JSON.stringify(credential));
        this.currentUserSubject.next(credential);
    }

    logout() {
        // this.currentAccount = null;
        this.currentUserSubject.next(null);
        this.redirectURL = null;
        localStorage.removeItem(CURRENT_USER);
    }

    isLoggedIn(): boolean {
        if (this.getCurrentAccount() != null && this.getCurrentAccount().token_type) {
            // const decoded: any = jwt(this.getCurrentAccount().access_token);
            // return decoded.exp > Date.now()/1000;
            return true;
        } else {
            return false;
        }
    }
}
