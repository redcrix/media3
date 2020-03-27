import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {JobCategory} from '../modal/job-category.modal';
import {API_JOB_CATEGORY} from '../api-endpoints';

/**
 * Service response for fetch, create, update and delete the Job Category.
 */
@Injectable({
    providedIn: 'root'
})
export class JobCategoryService extends BaseService<JobCategory> {
    constructor(private http: HttpClient) {
        super(http, API_JOB_CATEGORY);
    }
}
