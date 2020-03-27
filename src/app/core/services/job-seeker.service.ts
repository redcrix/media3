import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JobSeeker} from '../modal/job-seeker.modal';
import {BaseService} from './base.service';
import {API_JOB_SEEKER} from '../api-endpoints';
import {Observable} from 'rxjs';
import {Address} from '../modal/address.modal';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService extends BaseService<JobSeeker> {
  constructor(private http: HttpClient) {
    super(http, API_JOB_SEEKER);
  }

  updateAddress(id: string, address: Address): Observable<any> {
    const url = API_JOB_SEEKER + `/updateAddress/` + id;
    return this.http.put<any>(url, address);
  }

  updateDocuments(id: string, documents: string[]): Observable<any> {
    const url = API_JOB_SEEKER + `/updateDocuments/` + id;
    return this.http.put<any>(url, documents);
  }

  updatePhotos(id: string, photos: string[]): Observable<any> {
    const url = API_JOB_SEEKER + `/updatePhotos/` + id;
    return this.http.put<any>(url, photos);
  }

  updateWorkExperiennce(id: string, experiences: any[]): Observable<any> {
    const url = API_JOB_SEEKER + `/updateWorkExperience/` + id;
    return this.http.put<any>(url, experiences);
  }

  updateEmergencyContact(id: string, emergencyContact: string[]): Observable<any> {
    const url = API_JOB_SEEKER + `/update/EmergencyContact` + id;
    return this.http.put<any>(url, emergencyContact);
  }

}
