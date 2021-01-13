import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampsComponent } from './components/camps/camps.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RecipientFormComponent } from './components/admin-dashboard/recipient-form/recipient-form.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { DashboardComponent } from './components/admin-dashboard/dashboard/dashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
// import { AdminAddUserComponent } from './components/admin-dashboard/admin-add-user/admin-add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DonorformComponent } from './component/donorform/donorform.component';

@NgModule({
  declarations: [
    AppComponent,
    CampsComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    RecipientFormComponent,
    ProfileComponent,
    // AdminAddUserComponent,
    DashboardComponent,
    UserdashboardComponent,
    SignupComponent,
    LoginComponent,
    DonorformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
