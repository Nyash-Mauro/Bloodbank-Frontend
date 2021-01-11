import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampsComponent } from './components/camps/camps.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecepientRegistrationComponent } from './components/auth/recepient-registration/recepient-registration.component';
import { DonorRegistrationComponent } from './components/auth/donor-registration/donor-registration.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminPagesComponent } from './components/admin-dashboard/admin-pages/admin-pages.component';
import { RecipientFormComponent } from './components/recipient-form/recipient-form.component';
import { AdminRecordsComponent } from './components/admin-dashboard/admin-records/admin-records.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminAddUserComponent } from './components/admin-dashboard/admin-add-user/admin-add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CampsComponent,
    AboutComponent,
    NavbarComponent,
    RecepientRegistrationComponent,
    DonorRegistrationComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    AdminPagesComponent,
    RecipientFormComponent,
    AdminRecordsComponent,
    ProfileComponent,
    AdminAddUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
