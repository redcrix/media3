import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private app: AppService, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = environment.api_url;
        if (req.url.indexOf('/oauth/') === -1) {
            const token = this.app.getToken();
            const contentType = req.url.indexOf('/upload') >= 0  ? 'multipart/form-data' : 'application/json; charset=utf-8';
            let changeReg = req.clone({
                url: url + req.url,
                headers: req.headers
                    .set('Content-Type', contentType)
                    .set('Accept', 'application/json; charset=utf-8')
                    .set('Authorization', token)
            });
            if (req.url.indexOf('/fileupload') >= 0) {
                changeReg = req.clone({
                    url: url + req.url,
                    headers: req.headers
                        .set('Authorization', token)
                });
            }
            return next.handle(changeReg).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                    }
                }, (error) => {
                })
            );
        } else {
            const changeReg = req.clone({ url: url + req.url});
            return next.handle(changeReg).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                    }
                }, (error) => {
                })
            );
        }
    }
}

