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

  constructor(private service:DataserviceService,private router:Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  flag:any;

  MailIdFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);
  onClickMe1() {
    

    debugger;
    this.model;
  
    let data = [
      {'email': this.model.email, 'password': this.model.pass  }
    ];

    
    this.service.Login(this.model).subscribe((data: any) => {      
      console.log(data.status);
      console.log(data.user1);
      // this.flag = data.status;
      // this.userData = data.user1;
      if (this.flag == 0) {
      //  this.showError = true;
      }
      else {
        debugger;
        // this.notes.getEmail(this.userData.email);
        // this.router.navigate(['/fundoo']);
      }
    });

    // this.service.Login( this.model ).subscribe((flag:any)=>{
    //    if(this.flag==1)
    //     {
    //       console.log('sdafdfa');
    //       this.router.navigate(['registration'])
    //     }
    //     else{
    //       console.log('sdaf');
    //     }
    //   },

    //     //response => this.handleResponse(response),
    //     error => this.handleResponse(error)
    //   );
  }
  handleResponse(response) {
    if (response.success) {
      console.log("success");
    } else if (response.error) {
      console.log("errror");
    } 

  }



}

