export interface Student {
    userName: string;
    name: string;
    designation: string;

    email: string;
    rollNo: number;
    // TODO change dept to string when connection to backend
    department: string;
    batch: string;
    password ?: string;
    _id ?: string;
    profile ?: string;
}
