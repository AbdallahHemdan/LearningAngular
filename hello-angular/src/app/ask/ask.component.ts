import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public name = 'Omar Hemdan';

  constructor() {}

  ngOnInit(): void {}
  showUsername = (username: any) => {
    console.log(username.value);
  };

  logTitle = (title: any) => {
    console.log(title);
  };
}
