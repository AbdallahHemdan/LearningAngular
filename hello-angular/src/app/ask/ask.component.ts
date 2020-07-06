import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public name = 'Omar Hemdan';
  public hasError = false;
  public highlightedColor = 'blue';
  public mainTitleStyles = {
    color: 'red',
    fontWeight : 600,
    fontStyle : "italic"
  };

  constructor() {}

  ngOnInit(): void {}
}
