import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { Userinfo } from 'src/app/userinfo';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  role: String;
  email: String;
  password: String;
  ngOnInit(): void {
  }
  login() {
    var userinfo = new Userinfo(this.email, this.password)
    this.authService.login(userinfo).subscribe(res => {
      if (res['access']) {
        sessionStorage.setItem('token', res['access'])
        if (this.role == "1") {
          console.log('donor');
          //redirect to donor dashbord
        } else {
          console.log('recipient');

          //redirect to recipient dashboard
        }
        // this.router.navigate(['home'])
      }
    })
  }
}
