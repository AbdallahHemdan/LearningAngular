import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public prices = [
    'nnfrejk',
    'fkmrf',
    'kfnrek',
    'fjkrnf',
    'nnfrejk',
    'fkmrf',
    'kfnrek',
    'fjkrnf',
  ];
  public name = '';
  constructor() {}

  ngOnInit(): void {}
}
