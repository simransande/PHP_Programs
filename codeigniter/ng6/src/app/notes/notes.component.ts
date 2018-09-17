import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

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
  }
}
