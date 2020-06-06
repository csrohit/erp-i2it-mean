export interface Subject {
    _id: string;
    title: string;
    department?: string;
    university_code?: string;
    course_objectives?: string[];
    course_outcomes?: string[];
    credits?: undefined;
}
