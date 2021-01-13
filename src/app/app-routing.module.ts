import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampsComponent } from './components/camps/camps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DonorformComponent } from './component/donorform/donorform.component';

import {ProfileComponent} from 'src/app/components/profile/profile.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor', component: DonorformComponent},
  { path: '', redirectTo: "/home", pathMatch: "full" },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


