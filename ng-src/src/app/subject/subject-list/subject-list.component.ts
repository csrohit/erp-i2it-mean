import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from 'src/app/subject/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
subjects: Subject[];
  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((data: Subject[]) => this.subjects = data, err => console.log(err));
  }

  deleteSubject(id: string){
    console.log('Subject Deleted');
  }

}
