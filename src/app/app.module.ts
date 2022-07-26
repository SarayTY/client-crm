import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FilterCustomerPipe } from './pipes/customer-filter.pipe';
import { CustomerDetailsComponent } from './components/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInWithGoogleDirective } from './directives/log-in-with-google.directive';
import { SignOutDirective } from './directives/sign-out.directive';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    CustomerNewComponent,
    FilterCustomerPipe,
    CustomerDetailsComponent,
    CustomerEditComponent,
    DashboardComponent,
    LogInWithGoogleDirective,
    SignOutDirective,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
