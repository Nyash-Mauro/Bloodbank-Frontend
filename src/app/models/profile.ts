import { Identifiers } from "@angular/compiler";
import { DatepickerViewModel } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

export class Profile {
    constructor(
        public user:Identifiers,
        public first_name:string,
        public middle_name:string,
        public last_name:string,
        public email:string,
        public age:number,
        public gender:string,
        public date_of_birth:DatepickerViewModel,
        public blood_group:string,
        public phone_number:number,
        public location:string,
        public weight:number,
        date_registered:Date,
    ){}
}
