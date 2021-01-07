import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { CampsComponent } from './components/camps/camps.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecepientRegistrationComponent } from './components/auth/recepient-registration/recepient-registration.component';
import { DonorRegistrationComponent } from './components/auth/donor-registration/donor-registration.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RecipientFormComponent } from './components/admin-dashboard/recipient-form/recipient-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminRoutingModule } from './components/admin-dashboard/admin.routing.component';
import { DashboardComponent } from './components/admin-dashboard/dashboard/dashboard.component';

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
    RecipientFormComponent,
    ProfileComponent,
    DashboardComponent,
    // AdminRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
