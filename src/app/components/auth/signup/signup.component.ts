import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService:AuthService,private router: Router) { 

  }

  ngOnInit(): void {
  }
register(){
  console.log(this.authService.signup_form.value);
  
  this.authService.register(this.authService.signup_form.value).subscribe(res=>{
    if(res['error']){
      alert("Make sure all the fields are correct")
    }
    else{
      alert("User created successfully")
      this.router.navigate(['login'])
    }
  })
}
}
