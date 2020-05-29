import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models/tutor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {
  tutor = new Tutor('varshad', 'Varsha Degaonkar', '', 'varshad@gmail.com', '', [], '1234');

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
