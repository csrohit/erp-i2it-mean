import { Tutor } from './../../tutor/tutor';
import { Batch } from 'src/app/batch/batch';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department/department.service';
import { NgForm } from '@angular/forms';
import { Department } from '../../department/department';
import { SubjectService } from 'src/app/subject/subject.service';
import { Subject } from 'src/app/subject/subject';
import { BatchService } from '../batch.service';
import { TutorService } from 'src/app/tutor/tutor.service';
@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.css']
})
export class BatchRegisterComponent implements OnInit {

  batch: Batch = {
    title: 'BE',
    department: '5e99302dd5e4273bf27489ed',
    subjects: [],
    room: 'A302',
    strength: 72,
    head: ''
  };
  subjects: Subject[];
  departments: Department[];
  tutors: Tutor[];

  constructor(
    private departmentService: DepartmentService,
    private subjectService: SubjectService,
    private batchService: BatchService,
    private tutorService: TutorService
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe( data => this.departments = data, err => console.log(err));
    this.subjectService.getSubjects().subscribe(data => this.subjects = data, err => console.log(err));
    this.tutorService.getTutors().subscribe(data => this.tutors = data, err => console.log(err));
  }

  onSubmit(batchForm: NgForm) {
    // TODO: dispplay successfull message and newly created batch. add a back button to go back to the cpanel dashboard
    this.batchService.registerBatch(this.batch).subscribe(data => console.log(data), err => console.log(err));
  }

}
