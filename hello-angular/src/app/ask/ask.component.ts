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
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public specialClass = 'text-special';
  public isSuccess = false;
  public isError = !this.isSuccess;
  public isSpecial = true;

  constructor() {}

  ngOnInit(): void {}
}
