import { Designation } from './designation/designation';
export interface User {
    _id?: string;
    userName?: string;
    name: string;
    password ?: string;
    designation?: Designation;
    profileId?: string;
}
