import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
imports: [    RouterModule,  ]
import {  CampsComponent } from './components/camps/camps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {DashboardComponent} from 'src/app/components/admin-dashboard/dashboard/dashboard.component';
import { DonorRegistrationComponent } from './components/auth/donor-registration/donor-registration.component';
import {LoginComponent} from 'src/app/components/login/login.component'

import { RecepientRegistrationComponent} from './components/auth/recepient-registration/recepient-registration.component';
import {ProfileComponent} from 'src/app/components/profile/profile.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'camps', component: CampsComponent},
  { path: 'donor', component:  DonorRegistrationComponent},
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
  { path: 'recepient', component:  RecepientRegistrationComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }