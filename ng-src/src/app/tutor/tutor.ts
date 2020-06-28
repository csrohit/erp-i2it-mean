import { User } from './../user';
import { Department } from './../department/department';
import { Subject } from 'src/app/subject/subject';
export interface Tutor {

    email?: string;
    subjects?: Subject[];
    department?: Department;
    _id: string;
    userId?: User;
}
