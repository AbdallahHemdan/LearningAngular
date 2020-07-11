import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
