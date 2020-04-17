import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    roll_no: new FormControl(''),
    batch: new FormControl(''),
    department: new FormControl('')
  });

  constructor() { }

  onSubmit(){
    console.log(this.registerForm.getRawValue());
  }


  ngOnInit(): void {
  }

}
