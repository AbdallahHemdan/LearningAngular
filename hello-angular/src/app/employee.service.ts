import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'Abdallah Hemdan', age: 21 },
      { id: 2, name: 'Omar Hemdan', age: 11 },
      { id: 3, name: 'Mohamed Hemdan', age: 8 },
      { id: 4, name: 'Rokia Hemdan', age: 5 },
    ];
  }
}
