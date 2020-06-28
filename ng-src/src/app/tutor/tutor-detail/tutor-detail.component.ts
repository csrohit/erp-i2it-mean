import { Component, OnInit } from '@angular/core';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailComponent implements OnInit {

  tutor: Tutor = {
    _id: '5ed8e60bc03bd612859c81be',
    email: 'varshad@isquareit.edu.in',

    department: {
      _id: '5e99302dd5e4273bf27489ed',
      title: 'Electronics and Telecommunications'
    },
    userId: {
      _id: '5ed8e60bc03bd612859c81bd',
      userName: 'varshad',
      name: 'Varsha Degaonkar',
      designation: {
        _id: '5e98010d3b010e7431af32a4',
        title: 'Tutor'
      },
      profileId: '5ed8e60bc03bd612859c81be'
    }
  };

  private id: string;

  constructor(
    private tutorService: TutorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(data => {
    //   this.id = data.get('id');
    // }, err => console.log(err));
    // this.tutorService.getTutor(this.id).subscribe((data: Tutor) => {
    //   this.tutor = data;
    //   console.log(this.tutor);
    // }, err => console.log(err));
  }

}
