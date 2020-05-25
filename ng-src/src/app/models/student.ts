export class Student {
    constructor(
        public userName: string,
        public name: string,
        public email?: string,
        public rollNo?: number,
        // TODO change dept to string when connection to backend
        public department?: string,
        public batch?: string,
        public _id?: string
    ) { }
}
