export class Tutor {
    constructor(
        public userName: string,
        public name: string,
        public designation: string,

        public email: string,
        public department: string,
        public subjects: string[],
        public password?: string,
        public _id?: string,
        public profile?: string
    ) {}
}
