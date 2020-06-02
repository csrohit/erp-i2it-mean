import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectListComponent } from './subject-list/subject-list.component';


@NgModule({
  declarations: [SubjectDetailComponent, SubjectListComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
