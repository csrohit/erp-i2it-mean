import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // TODO: remove following dummy declarations

  // user related data
  isStudent = true;
  confirmPassword = '1234';
  designations = [
    {_id: 'student', title: 'Student'},
    {_id: 'tutor', title: 'Teacher'},
    {_id: 'clerk', title: 'Clerk'},
    {_id: 'librarian', title: 'Librarian'}
  ];
  departments = [
    {_id: 'etc', title: 'Electronics and Telecommunication'},
    {_id: 'etc', title: 'Information Technology'},
    {_id: 'etc', title: 'Computer Science'}
  ];
  // student related things
  student = new Student('csrohit', 'Rohit Nimkar', 'student', 'nehalnimkar@isquareit.edu.in', 57, 'etc', 'be', '1234');
  batches = [
    {_id: 'fe', title: 'FE'},
    {_id: 'se', title: 'SE'},
    {_id: 'te', title: 'TE'},
    {_id: 'be', title: 'BE'}
  ];

  onSubmit(registerForm: NgForm) {
    console.log(this.student);
    console.log(registerForm.value);
    this.studentService.test().subscribe( data => {
      console.log(data);
    });
  }

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

}
