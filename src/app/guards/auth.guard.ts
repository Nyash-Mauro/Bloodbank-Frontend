import { Injectable } from '@angular/core';
import { CanActivate,  Router,} from '@angular/router';
import {AuthServiceService} from 'src/app/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(
  //   private authService: AuthServiceService,
  //   private router: Router
  // ) {}

  // canActivate() {
  //   if (this.authService.isLoggedIn()) {
  //     this.authService.refreshToken();

  //     return true;
  //   } else {
  //     this.authService.logout();
  //     this.router.navigate(['login']);

  //     return false;
  //   }
  // }
}
  

