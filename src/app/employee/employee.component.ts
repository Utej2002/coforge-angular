import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeename:String="honey";
  employeeage:number=23;

  title="Employee Details-Data Binding Using Various Directions"

  isManager:boolean=true;

  skills:string[] =['javaScript','Angular','TypeScript'];

  Position:PositionType=PositionType.SeniorDeveloper

  address:{street:string,city:string,postalCode:number}={
    street:'123 main st',
    city:'New york',
    postalCode:10001
  };
//Any data type can be of any type
  extraInfo:any = 'Additional Employee info';
//Event Binding - handling method
  message:string='';

  employeePosition: string='Software Engineering';
//Event Binding method
  hello():void{
    this.message='Hello from Event Binding in Angular By- '+this.employeename
  }
  clear():void{
    this.message='';
  }
toggleManagerStatus():void{
  this.isManager=!this.isManager;
}
//property Binding -one way Binding
username :string='Nandi eswar';
info:string='property Binding -one way';

updateUserName(){
this.username='Honey goosling';
}
convertToDate(){
  const date=new Date();
  return date.toLocaleDateString();
}
add():number{
return 10+30;
}
}
//Enum for position Type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}
