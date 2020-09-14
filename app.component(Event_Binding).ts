import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl :'./app.component.html',
  
  styleUrls:['./app.component.css']
})
export class AppComponent {
  boldClass: boolean = true;
  applyItalicsClass : boolean=true;
  isBold:boolean = true;
  fontSize=30;

  addClasses()
  {
    let classes={
      boldClass : this.boldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;
  }
  
  addStyles()
  {
    let styles = {   
      'font-weight' : this.boldClass ? 'Bold': 'normal',
      'font-size.px': this.fontSize
  };
   return styles;
} 
 
  name1:string="Amit"
  id1:number=7

  name2:string="Jhon"
  id2:number=8

  name3:string="Laura"
  id3:number=9

  name4:string="Daniel"
  id4:number=10

  // students : any[]=[
  //   {
  //     name  ="Amit",
  //     id =7
  //   },
  //   {
  //     name="Jhon",
  //     id=8
  //   },
  //   {
  //     name="Laura",
  //     id=9
  //   }
  // ];
  
}

