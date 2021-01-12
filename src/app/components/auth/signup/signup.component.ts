import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService:AuthService) { 

  }

  ngOnInit(): void {
  }
register(){
  console.log(this.authService.signup_form.value);
  
  this.authService.register(this.authService.signup_form.value).subscribe(res=>{
    console.log(res)
  })
}
}
