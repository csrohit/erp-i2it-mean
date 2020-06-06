import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

@NgModule({
  declarations: [StudentDetailComponent, StudentListComponent, StudentDashboardComponent, StudentUpdateComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
