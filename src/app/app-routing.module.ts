import { Component , NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomerDetailsComponent } from './components/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full',

  },
  {
    path:'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path:'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children :[
      {
        path:'',
        redirectTo:'customers',
        pathMatch:'full',
      },
      {
        path:'customers',
        component: CustomersComponent,
      },
      {
        path:'customers/new',
        component: CustomerNewComponent,
      },
      {
        path:'customers/:id',
        component:CustomerDetailsComponent,
      },
      {
        path:'customers/:id/edit',
        component: CustomerEditComponent,
      },
      {
        path:'contacts',
        component: ContactsComponent,
      },
    ],
  },
  {
    path:'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
