import { Batch } from './../../interfaces/batch';
import { Designation } from './../../interfaces/designation';
import { Student } from './../../interfaces/student';
import { Department } from './../../models/department';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { DesignationService } from 'src/app/services/designation.service';
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
  designations: Designation[];
  departments: Department[];
  // student related things
  student: Student = {
    userName: 'csrohit',
    name: 'Rohit Nimkar',
    designation: '5e9801003b010e7431af32a3',
    email: 'nehalnimkar@isquareit.edu.in',
    rollNo: 57,
    batch: '5e993c9519d8405867922905',
    department: '5e99302dd5e4273bf27489ed',
    password: '1234'
  };
  batches: Batch[];
  onSubmit(registerForm: NgForm) {
    console.log(this.student);
    this.studentService.register(this.student).subscribe(data => console.log(data), err => console.log(err));
  }

  constructor(
    private studentService: StudentService,
    private designationService: DesignationService,
    private departmentService: DepartmentService,
    private batchService: BatchService
  ) { }

  ngOnInit(): void {
    // this.designationService.getDesignations().subscribe( (data: Designation[]) => {
    //   this.designations = data;
    // });
    this.departmentService.getDepartments().subscribe(data => this.departments = data,
    err => {
      console.log(err);
    });
    this.designationService.getDesignations().subscribe( data => this.designations = data, err => console.log(err));
    this.batchService.getBatches().subscribe(data => this.batches = data, err => console.log(err));




  }

}
