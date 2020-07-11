import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-with-details',
  templateUrl: './ask-with-details.component.html',
  styleUrls: [
    './ask-with-details.component.scss',
    './../ask/ask.component.scss',
  ],
})
export class AskWithDetailsComponent implements OnInit {
  public employees: object = [
    { id: 1, name: 'Abdallah Hemdan', age: 21 },
    { id: 2, name: 'Omar Hemdan', age: 11 },
    { id: 3, name: 'Mohamed Hemdan', age: 8 },
    { id: 4, name: 'Rokia Hemdan', age: 5 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
