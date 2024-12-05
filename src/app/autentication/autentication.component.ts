import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './autentication.component.html',
  styleUrl: './autentication.component.css'
})
export class AutenticationComponent {
formdata:any;

ngOnInit(){
  this.formdata=new FormGroup({
    emailid:new FormControl("teja@gmail.com"),
    password:new FormControl("9393")
  });
}
  onClickSubmit(data:any){
    this.formdata.emailid=data.emailid
    alert('hello' +this.formdata.emailid);
  
}

}
