import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CampsComponent } from './components/camps/camps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {AdminRoutingModule} from 'src/app/components/admin-dashboard/admin.routing.component';
import { DonorRegistrationComponent } from './components/auth/donor-registration/donor-registration.component';

import { RecepientRegistrationComponent} from './components/auth/recepient-registration/recepient-registration.component';
import {ProfileComponent} from 'src/app/components/profile/profile.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'camps', component: CampsComponent},
  { path: 'donor', component:  DonorRegistrationComponent},
  { path: 'profile', component: ProfileComponent},
  {
    path: 'Admin',
    component: AdminRoutingModule,
    children: [{
      path: '',
      loadChildren: './'
    }]
  },
  { path: 'recepient', component:  RecepientRegistrationComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }