export class User {
    constructor(
        public login?: string,
        public public_repos?:number,
        public avatar_url?: string,
        public followers?: number,
        public following?: number
    ){ }
}
