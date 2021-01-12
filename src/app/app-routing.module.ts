import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampsComponent } from './components/camps/camps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DonorRegistrationComponent } from './components/auth/donor-registration/donor-registration.component';
import { RecepientRegistrationComponent } from './components/auth/recepient-registration/recepient-registration.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'donor', component: DonorRegistrationComponent },
  { path: 'recepient', component: RecepientRegistrationComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


