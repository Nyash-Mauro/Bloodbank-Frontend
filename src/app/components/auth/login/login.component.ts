import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService ) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.authService.signup_form.value);
    
    this.authService.register(this.authService.signup_form.value).subscribe(res=>{
      console.log(res)
    })
  }
}
