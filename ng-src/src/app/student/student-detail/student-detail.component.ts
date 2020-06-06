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
  student: Student = {_id: ''};

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.student._id = data.get('id');
    });
    this.studentService.getStudent(this.student._id).subscribe(data =>{
      console.log(data);
    },err => console.log(err));
  }

}
