import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/designation/designation';
import { Department } from 'src/app/department/department';
import { Subject } from 'src/app/subject/subject';
import { Tutor } from '../tutor';
import { DesignationService } from 'src/app/designation/designation.service';
import { DepartmentService } from 'src/app/department/department.service';
import { TutorService } from '../tutor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {

  isSubmitted = true;

  designations: Designation[];
  departments: Department[];
  subjects: Subject[];

  tutor: Tutor;

  onSubmit() {
    // TODO: dispplay successfull message and newly created tutor. add a back button to go back to the cpanel dashboard
    this.tutorSevice.registerTutor(this.tutor)
      .subscribe( (data: Tutor) => {
        this.tutor = data;
        this.isSubmitted = true;
    }, err => console.log(err));
  }

  constructor(
    private departmentService: DepartmentService,
    private designationService: DesignationService,
    private tutorSevice: TutorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe( data => this.departments = data, err => console.log(err));
    this.designationService.getDesignations().subscribe( data => this.designations = data, err => console.log(err));
  }

}
