import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';

import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import {MatSnackBar} from '@angular/material';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  model:any={}
  Error: boolean = false;
  constructor(private service:DataserviceService,private router:Router) { }

  ngOnInit() {
  }
  flag:any;
  mail:any;

  MailIdFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);

  s_login() {
    
   
   // debugger;
    this.model;
  
    let data = [
      {'email': this.model.email, 'password': this.model.pass  }
    ];

    this.service.Login(data).subscribe((Statusdata: any) => {      
    //debugger;
      console.log(Statusdata);
     // console.log(data.user1);
     this.flag=Statusdata.status;
      this.mail=Statusdata.email;
   //  debugger;

      if (this.flag == 1) {
       // this.Error = true;
       //this.Email = this.userData.email;
        localStorage.setItem('email', this.mail);
        this.router.navigate(['/FundooNotes']);
        
      }
      else{
        //debugger;
        // this.notes.getEmail(this.userData.email);
         //this.router.navigate(['/FundooNotes']);
         this.Error = true;
      }
    });

  }
  // handleResponse(response) {
  //   if (response.success) {
  //     console.log("success");
  //   } else if (response.error) {
  //     console.log("errror");
  //   } 

  }





