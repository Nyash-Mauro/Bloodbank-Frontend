import { Identifiers } from "@angular/compiler";
export class Donations {
    constructor(
       public User:Identifiers,
       public facility:string,
       public donate_date:Date,
       public last_donate_date:Date,
       public location:string,
       public blood_group:string,
       public medical_condition:string,
    ) {}

}
