import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public message = 'Abdallah hemdan';
  public person: object = {
    name: 'Abdallah Hemdan',
    age: 21,
  };

  public date = new Date();
  constructor() {}
  ngOnInit(): void {}
}
