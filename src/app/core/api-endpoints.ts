export const PREFIX = '/api';

export const API_AUTH = PREFIX + '/auth-service';
export const API_ACCOUNT = API_AUTH + '/v1/account';
export const API_AUTH_PUBLIC = API_AUTH + '/v1/auth';

// Job SERVICE
const JOB_SERVICE = '/job-service';
export const API_JOB_CATEGORY = PREFIX + JOB_SERVICE + '/v1/jobcategory';


// Job Seeker SERVICE
const JOB_SEEKER_SERVICE = '/job-seeker-service';
export const API_JOB_SEEKER = PREFIX + JOB_SEEKER_SERVICE + '/v1/jobseeker';
export const API_JOB_PREFERENCE = PREFIX + JOB_SEEKER_SERVICE + '/v1/jobpreference';





