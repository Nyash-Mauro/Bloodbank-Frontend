import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from 'src/app/components/admin-dashboard/dashboard/dashboard.component';
import {RecipientFormComponent} from 'src/app/components/admin-dashboard/recipient-form/recipient-form.component';
import {ProfileComponent} from 'src/app/components/profile/profile.component';
const routes: Routes = [

  { path: 'profile', component: ProfileComponent},
  {
    path: 'Admin',
    component: DashboardComponent,
    children: [{
      path: '',
      loadChildren: './'
    }]
  },
  { path: 'Add', component:RecipientFormComponent  },
  { path: '', redirectTo:"/home", pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }