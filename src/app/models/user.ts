export class User {
    constructor(
        public email: string,
        public first_name:string,
        public last_name:string,
        date_joined:Date,
        is_admin:boolean,
        is_staff:boolean,
        is_active:boolean,
    ){ }

}
