import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-angular';
  public username = 'Abdallah Hemdan';
  public age = 21;
  public childMessage = '';

  storeChildMessage = (value) => {
    console.log('value ', value);
    this.childMessage = value;
    console.log('this.childMessage : ', this.childMessage);
  };
}
