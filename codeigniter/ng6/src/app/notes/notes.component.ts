import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [DataserviceService]  

})
export class NotesComponent implements OnInit {
  model:any={}

  constructor(private service:DataserviceService) { }

  ngOnInit() {
  }
  Card: boolean = true;
  createCard : boolean = false;

  showHideMain() {
    this.Card = false;
    this.createCard = true;
  }
  showHideImp() {
    this.Card = true;
    this.createCard = false;
    this.model;
  
    let data = [
      {'title': this.model.title, 'description': this.model.descriptin  }
    ];
    this.service.Notes({ data })
    .subscribe(
     // response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
}
handleResponse(response) {
  // debugger;
   if (response.success) {
     console.log("success");
   } else if (response.error) {
     console.log("errror");
   } 

 }
  }
  

