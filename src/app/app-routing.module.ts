import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CampsComponent } from './components/camps/camps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {DashboardComponent} from 'src/app/components/admin-dashboard/dashboard/dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DonorformComponent } from './component/donorform/donorform.component';

import {ProfileComponent} from 'src/app/components/profile/profile.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'camps', component: CampsComponent},
  { path:'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  {
    path: 'Admin',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserdashboardComponent,
  },
  { path: '', redirectTo:"/home", pathMatch:"full"},
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


