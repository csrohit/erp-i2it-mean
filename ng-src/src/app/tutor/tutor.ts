export interface Tutor {
    userName: string;
    name: string;
    designation: string;

    email: string;
    subjects: string[];
    // TODO change dept to string when connection to backend
    department: string;
    password ?: string;
    _id ?: string;
    profile ?: string;
}
