import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';

/* Components */
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentListComponent,
    StudentDashboardComponent,
    StudentUpdateComponent,
    StudentRegisterComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ],
  exports: [
    StudentDetailComponent,
    StudentListComponent,
    StudentUpdateComponent,
    StudentRegisterComponent
  ]
})
export class StudentModule { }
