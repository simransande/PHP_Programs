import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [DataserviceService]  

})
export class NotesComponent implements OnInit {
  model:any={}
  // archive: number = 0;
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
   // debugger;

    this.Card = true;
    this.createCard = false;
    this.model;
    //console.log(error);

    let data = [
      {'title': this.model.title, 'description': this.model.description}
    ];
    this.service.Notes({ data})
    // this.service.Notes({ data}, this.archive)

    .subscribe(
      // this.service.Notes(data).ssubscribe()
      // .subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
     
    );

    
}
// Archive() {
//   this.archive = 1;
// }

handleResponse(response) {
  // debugger;
   if (response.success) {
     //console.log("success");
   } else if (response.error) {
    // console.log("errror");
   } 

 }
  }
  

