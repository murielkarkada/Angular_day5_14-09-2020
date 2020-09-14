//TWO-WAY Binding example

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string= "Jhon"
  lastName:string= 'Baptist'
  age:number =30
  gender:string='Male'
  // showDetails:boolean=false
  // toggleShow():void
  // {
  //   this.showDetails=!this.showDetails;
  // }
}
