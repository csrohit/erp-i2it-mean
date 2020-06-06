import { User } from './../user';
import { Batch } from './../batch/batch';
import { Department } from './../department/department';
export interface Student {
    _id ?: string;
    email?: string;
    rollNo?: number;
    department?: Department;
    batch?: Batch;
    userId?: User;
}
