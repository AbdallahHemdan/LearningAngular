import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskComponent } from './ask/ask.component';
import { AskWithDetailsComponent } from './ask-with-details/ask-with-details.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [AppComponent, AskComponent, AskWithDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
