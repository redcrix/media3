export class JobPreference {
    id: string;
    jobSeekerId: string;
    maxDistance: string;
    availability: Availability[];

    isDelete: boolean;
    createdOn: Date;
    updatedOn: Date;
    updatedBy: string;
    createdBy: string;
}

export class Availability {
    day: string;
    dateFrom: string;
    dateTo: string;

}

export class JobCategoryPreference {
    categoryId: string;
    categoryName: string;
    level: string;
    maxHourlyRate: number;
    status: number;

}
