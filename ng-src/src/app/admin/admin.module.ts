import { StudentModule } from './../student/student.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CPanelComponent } from './c-panel/c-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRegisterComponent } from '../student/student-register/student-register.component';
import { TutorRegisterComponent } from '../tutor/tutor-register/tutor-register.component';
import { BatchRegisterComponent } from '../batch/batch-register/batch-register.component';
import { DesignationRegisterComponent } from '../designation/designation-register/designation-register.component';
import { DepartmentRegisterComponent } from '../department/department-register/department-register.component';
import { SubjectRegisterComponent } from '../subject/subject-register/subject-register.component';
import { FormsModule } from '@angular/forms';
import { TutorModule } from '../tutor/tutor.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';


@NgModule({
  declarations: [
    CPanelComponent,
    DashboardComponent,
    StudentRegisterComponent,
    TutorRegisterComponent,
    BatchRegisterComponent,
    DesignationRegisterComponent,
    DepartmentRegisterComponent,
    SubjectRegisterComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TutorModule
  ],
  providers: []
})
export class AdminModule { }
