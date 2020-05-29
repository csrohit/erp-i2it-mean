import { Department } from './../../models/department';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { DesignationService } from 'src/app/services/designation.service';
import { Designation } from 'src/app/models/designation';
import { DepartmentService } from 'src/app/services/department.service';
import { BatchService } from 'src/app/services/batch.service';

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
  designations: Designation[];
  departments: Department[];
  // student related things
  student = new Student('csrohit', 'Rohit Nimkar', '5e9801003b010e7431af32a3', 'nehalnimkar@isquareit.edu.in', 57, 'etc', 'be', '1234');
  batches = [
    {_id: 'fe', title: 'FE'},
    {_id: 'se', title: 'SE'},
    {_id: 'te', title: 'TE'},
    {_id: 'be', title: 'BE'}
  ];

  onSubmit(registerForm: NgForm) {
    console.log(this.student);
    // this.studentService.register(this.student).subscribe( data => {
    //   console.log(data);
    // });
  }

  constructor(
    private studentService: StudentService,
    private designationService: DesignationService,
    private departmentService: DepartmentService,
    private batchService: BatchService
  ) { }

  ngOnInit(): void {
    this.designationService.getDesignations().subscribe( (data: Designation[]) => {
      this.designations = data;
    });
    this.departmentService.getDepartments().subscribe( (data: JSON) => {
      console.log(data);
    });
  }

}
