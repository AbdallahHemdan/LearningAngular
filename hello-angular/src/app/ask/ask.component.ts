import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public name = 'Omar Hemdan';
  public userId = '123456789';
  public isInputDisabled = false;

  constructor() {}

  ngOnInit(): void {}
}
