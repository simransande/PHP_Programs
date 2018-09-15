import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { FundooNotesComponent } from './fundoo-notes/fundoo-notes.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'fundoo-notes', component: FundooNotesComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }


    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
