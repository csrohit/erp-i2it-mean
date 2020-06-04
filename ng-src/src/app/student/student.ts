import { User } from '../user';

export interface Student {
    email: string;
    rollNo: number;
    // TODO change dept to string when connection to backend
    department: string;
    batch: string;
    _id ?: string;
    user?: User;
}
