import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest, HttpEvent, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiURLInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = environment.api_url;
        console.log('url##', url);
        req = req.clone({
            url: url + req.url
        });

        console.log('req ##', req.url);

        // lets add elapse time difference
        const started = Date.now();
        return next.handle(req).pipe(tap(
            event => {
                if (event.type === HttpEventType.Response) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            }));
    }
}
