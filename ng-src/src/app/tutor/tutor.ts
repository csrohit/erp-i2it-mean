import { User } from './../user';
export interface Tutor {
    email: string;
    subjects: string[];
    // TODO change dept to string when connection to backend
    department: string;
    _id ?: string;
    user?: User;
}
