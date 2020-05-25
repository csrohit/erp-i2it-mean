export class Student {
    constructor(
        public userName: string,
        public name: string,
        public designation: string,

        public email: string,
        public rollNo: number,
        // TODO change dept to string when connection to backend
        public department: string,
        public batch: string,
        public password?: string,
        public _id?: string,
        public profile?: string
    ) { }
}
