import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public employees: object = [
    { id: 1, name: 'Abdallah Hemdan', age: 21 },
    { id: 2, name: 'Omar Hemdan', age: 11 },
    { id: 3, name: 'Mohamed Hemdan', age: 8 },
    { id: 4, name: 'Rokia Hemdan', age: 5 },
  ];
  constructor() {}
  ngOnInit(): void {}
}
