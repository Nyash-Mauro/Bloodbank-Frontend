import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { environment } from '../../environments/environment'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup_form:FormGroup = new FormGroup({
    // role:new FormControl('',Validators.required),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  login_form:FormGroup = new FormGroup({
    // role:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

  loginUrl = environment.loginEndpoint
  registerUrl = environment.signUpEndpoint

  login(loginDetails){
    return this.http.post(this.loginUrl,loginDetails)
  }
  register(registerDetails){
    return this.http.post(this.registerUrl,registerDetails)
  }
}


/* import
        ReactiveFormsModule - app module
        vFormsModule - app module
        HttpService - app module
        call http service in ctor - auth service
        register service in provider - app module
*/