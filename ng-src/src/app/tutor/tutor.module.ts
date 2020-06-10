import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { TutorUpdateComponent } from './tutor-update/tutor-update.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';


@NgModule({
  declarations: [TutorListComponent, TutorDetailComponent, TutorUpdateComponent, TutorRegisterComponent],
  imports: [
    CommonModule,
    TutorRoutingModule,
    FormsModule
  ]
})
export class TutorModule { }
