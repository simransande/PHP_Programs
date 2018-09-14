import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  MailIdFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(14)
  ])
}
