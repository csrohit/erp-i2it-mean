import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from '../tutor';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit {
  tutors: Tutor[];
  constructor(
    private tutorService: TutorService
  ) { }

  ngOnInit(): void {
    this.tutorService.getTutors().subscribe((data: Tutor[]) => this.tutors = data, err => console.log(err));
  }
  deleteTutor(id: string){
    console.log("Faculty deleted");
  }
}
