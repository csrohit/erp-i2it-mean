import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';


@NgModule({
  declarations: [TutorListComponent, TutorDetailComponent],
  imports: [
    CommonModule,
    TutorRoutingModule
  ]
})
export class TutorModule { }
