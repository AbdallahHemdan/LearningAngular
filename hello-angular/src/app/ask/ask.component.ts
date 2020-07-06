import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() public username;

  // We can use a different name of the prop name
  @Input('age') public userAge;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  logProps = () => {
    console.log(this.username);
  };

  fireEvent = () => {
    console.log('Hello, from fireEvent');
    this.childEvent.emit('Hello, Hemdan from ask-(child)-component');
  };
}
