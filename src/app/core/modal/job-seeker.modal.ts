import {Address} from './address.modal';

export class JobSeeker {
    name: string;
    mobile: string;
    email: string;
    gender: string;
    deviceToken: string;
    documents: string[];
    address: Address;
    emergencyContact: EmergencyContact;

    status: string;
    isDelete: boolean;
    createdOn: Date;
    updatedOn: Date;
    updatedBy: string;
    createdBy: string;

}

export class EmergencyContact {
    address: string;
    mobile: string;
    email: string;
}
