import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student = {
    _id: '5ed8e2c81783030a1de5bb77',
    email: 'nehalnimkar@isquareit.edu.in',
    rollNo: 57,
    userId: {
      _id: '5ed8e2c81783030a1de5bb76',
      userName: 'csrohit',
      name: 'Rohit Nimkar',
      designation: {
        title: 'Student',
        _id: '5e9801003b010e7431af32a3'
      },
      profileId: '5ed8e2c81783030a1de5bb77'
    },
    batch: {_id: '5ed79e408a31c24eb27e6f2d', title: 'BE'},
    department: {_id: '5e99302dd5e4273bf27489ed', title: 'Electronics and Telecommunications'},
};

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(data => {
    //   this.student._id = data.get('id');
    // }, err => console.log(err));
    // this.studentService.getStudent(this.student._id).subscribe(data =>{
    //   console.log(data);
    // }, err => console.log(err));
  }

}
