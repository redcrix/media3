import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {share} from 'rxjs/operators';
import {PageableResponse} from "../modal/pageable-response.modal";
import {Search} from "../modal/search.modal";

export class BaseService<T> {
    private _http: HttpClient;
    private _url: string;

    constructor(http: HttpClient, url: string) {
        this._url = url;
        this._http = http;
    }

    searchAndSort(page: number, size: number, sort: string, order: string, searchList?: Search[]): Observable<PageableResponse<T>> {
        let params = new HttpParams();
        let url = this._url + '?page=' + page ;
        if (size != null) {
            url += '&size=' + size;
        }

        if (order !== 'desc') {
            order = 'asc';
        }
        if (sort != null) {
            url += ('&sort=' + sort + ',' + order);
        } else {
            url += ('&sort=createdOn,desc');
        }

        if (searchList && searchList.length > 0) {
            _.forEach(searchList, (search) => {
                if (search.column && search.content) {
                    params = params.append(search.column, search.content);
                }
            });
        }
        return this._http.get<PageableResponse<T>>(url, { params: params });
    }


    count(searchList?: Search[]): Observable<number> {
        let params = new HttpParams();
        const url = this._url + '/count';
        if (searchList && searchList.length > 0) {
            const url = this._url + '/count?';
            _.forEach(searchList, (search: Search) => {
                if (search.column && search.content) {
                    params = params.append(search.column, search.content);
                }
            });
        }
        return this._http.get<number>(url, { params: params }).pipe(share());
    }

    getById(id: any): Observable<T> {
        const url = this._url + '/' + id;
        return this._http.get<T>(url).pipe(share());
    }

    delete(id: any): Observable<any> {
        const url = this._url + '/' + id;
        return this._http.delete<any>(url);
    }

    update(id: any, data: T): Observable<T> {
        const url = this._url + '/' + id;
        return this._http.put<T>(url, data);
    }

    create(data: T): Observable<T> {
        const url = this._url
        return this._http.post<T>(url, data);
    }

}
