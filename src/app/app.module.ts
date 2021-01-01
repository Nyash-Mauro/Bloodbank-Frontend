import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { RecipientFormComponent } from './components/recipient-form/recipient-form.component';
import { AdminRecordsComponent } from './components/admin-records/admin-records.component';
// import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ContactUsComponent,
    AdminPagesComponent,
    RecipientFormComponent,
    AdminRecordsComponent,
    // SignupComponent
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
