// ngFor Example

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {


  employees:any[] =[
    { empno:1001,name:'Jack',salary:'75000',dob:'12-05-1996'},
    { empno:1002,name:'Max',salary:'65000',dob:'31-05-1991'},
    { empno:1003,name:'Laura',salary:'35000',dob:'21-02-1998'},
    { empno:1004,name:'Daniel',salary:'45000',dob:'09-08-1999'},
    { empno:1005,name:'Rose',salary:'50000',dob:'28-03-1996'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
