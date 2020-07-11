import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-ask-with-details',
  templateUrl: './ask-with-details.component.html',
  styleUrls: [
    './ask-with-details.component.scss',
    './../ask/ask.component.scss',
  ],
})
export class AskWithDetailsComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
