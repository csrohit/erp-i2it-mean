import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Department } from 'src/app/department/department';
import { Designation } from './../../designation/designation';
import { Student } from '../student';
import { Batch } from 'src/app/batch/batch';
import { DepartmentService } from 'src/app/department/department.service';
import { DesignationService } from 'src/app/designation/designation.service';
import { BatchService } from 'src/app/batch/batch.service';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  // user related data
  designations: Designation[];
  departments: Department[];
  // student related things
  student: Student;
  batches: Batch[];
  constructor(
    private departmentService: DepartmentService,
    private designationService: DesignationService,
    private batchService: BatchService,
    private studentService: StudentService
  ) { }

  onSubmit(registerForm: NgForm) {
    this.studentService.register(this.student)
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe( data => this.departments = data, err => console.log(err));
    this.designationService.getDesignations().subscribe( data => this.designations = data, err => console.log(err));
    this.batchService.getBatches().subscribe( data => this.batches = data, err => console.log(err));
  }
}
