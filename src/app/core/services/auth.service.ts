import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { LoginRequest } from '../modal/login-request.model';
import { LoginResponse } from '../modal/login-response.modal';
import {API_ACCOUNT, API_AUTH_PUBLIC} from "../api-endpoints";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basicAuthHeader = 'Basic ' + btoa('mobile-client:ionic');

  constructor(private http: HttpClient, private appService: AppService) {
  }

  sendOTP(mobileNo: string) {
    const url = API_AUTH_PUBLIC + `/mobileNo/otp/${mobileNo}`;
    return this.http.get<any>(url);
  }
  
  verifyOTP(request: LoginRequest) : Observable<LoginResponse> {
    const url = API_AUTH_PUBLIC + `/login-otp`;
    return this.http.post<LoginResponse>(url, request);
  }

}
