import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from './base.service';
import {API_JOB_PREFERENCE} from '../api-endpoints';
import {Observable} from 'rxjs';
import {JobCategoryPreference, JobPreference} from '../modal/job-preference.modal';

@Injectable({
  providedIn: 'root'
})
export class JobPreferenceService extends BaseService<JobPreference> {
  constructor(private http: HttpClient) {
    super(http, API_JOB_PREFERENCE);
  }

  setHourlyRates(id: string, jobCategoryList: JobCategoryPreference[]): Observable<any> {
    const url = API_JOB_PREFERENCE + `/updateRates/` + id;
    return this.http.put<any>(url, jobCategoryList);
  }
}
