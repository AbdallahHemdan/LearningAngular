import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public name = 'Omar Hemdan';
  public age = 21;
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}
  greetUser = () => `Hello, ${this.name}`;
}
