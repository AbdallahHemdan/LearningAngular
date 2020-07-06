import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public name = 'Omar Hemdan';
  public greetingMessage = '';
  sayHello = () => {
    console.log(`Hello, ${this.name}`);
    this.greetingMessage = `Hello, ${this.name}`;
  };
  logEvent = (event: any) => {
    console.log(event);
  };
  constructor() {}

  ngOnInit(): void {}
}
