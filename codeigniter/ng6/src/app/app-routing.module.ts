import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { FundooNotesComponent } from './fundoo-notes/fundoo-notes.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { NotesComponent } from './notes/notes.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'ForgotPassword', component: ForgotPasswordComponent },
      { path: 'fundoo-notes', component: FundooNotesComponent }
    



    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
