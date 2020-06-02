import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/designation/designation';
import { Department } from 'src/app/department/department';
import { Subject } from 'src/app/subject/subject';
import { Tutor } from '../tutor';
import { DesignationService } from 'src/app/designation/designation.service';
import { DepartmentService } from 'src/app/department/department.service';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {

  designations: Designation[];
  departments: Department[];
  subjects: Subject[];

  tutor: Tutor = {
    userName: 'varshad',
    name: 'Varsha Degaonkar',
    designation: '5e98010d3b010e7431af32a4',
    email: 'varshad@isquareit.edu.in',
    department: '5e99302dd5e4273bf27489ed',
    password: '1234',
    subjects: []
  };

  onSubmit(){
    console.log();
  }

  constructor(
    private departmentService: DepartmentService,
    private designationService: DesignationService,
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe( data => this.departments = data, err => console.log(err));
    this.designationService.getDesignations().subscribe( data => this.designations = data, err => console.log(err));
  }

}
