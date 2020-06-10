import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(
    private studentService: StudentService
  ) { }

  deleteStudent() {
    console.log('deleted');
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )
  }
}
