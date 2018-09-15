import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  model:any={}

  constructor(private service:DataserviceService) { }

  ngOnInit() {
  }
  MailIdFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);
  onClickMe1() {
    //debugger;
    this.model;


    //let user = new User('', '');
    //user.username = "prashant";
    //user.password = "asdfasfa";
    let data = [
      {'email': this.model.email, 'password': this.model.pass  }
    ];
    this.service.Login({ data })
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
  }

  handleResponse(response) {
    if (response.success) {
     // console.log("success");
    } else if (response.error) {
      //console.log("errror");
    } else {

    }

  }



}

