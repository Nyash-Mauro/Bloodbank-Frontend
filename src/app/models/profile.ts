import { Identifiers } from "@angular/compiler";
import { DatepickerViewModel } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

export class Profile {
    user:Identifiers;
    first_name:string;
    middle_name:string;
    last_name:string;
    email:string;
    age:number;
    gender:string;
    date_of_birth:DatepickerViewModel;
    blood_group:string;
    phone_number:number;
    location:string;
    weight:number;
    date_registered:Date;
}
