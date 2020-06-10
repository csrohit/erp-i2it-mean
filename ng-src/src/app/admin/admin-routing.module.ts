import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPanelComponent } from './c-panel/c-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';


/* Components from student module */
import { StudentListComponent } from '../student/student-list/student-list.component';
import { StudentRegisterComponent } from '../student/student-register/student-register.component';
import { StudentUpdateComponent } from '../student/student-update/student-update.component';
import { StudentDetailComponent } from '../student/student-detail/student-detail.component';

/* Components from tutor module */
import { TutorListComponent } from '../tutor/tutor-list/tutor-list.component';
import { TutorRegisterComponent } from '../tutor/tutor-register/tutor-register.component';
import { TutorDetailComponent } from '../tutor/tutor-detail/tutor-detail.component';
import { TutorUpdateComponent } from '../tutor/tutor-update/tutor-update.component';

/* Components of Batch module */
import { BatchListComponent } from '../batch/batch-list/batch-list.component';
import { BatchDetailComponent } from '../batch/batch-detail/batch-detail.component';
import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { DepartmentDetailComponent } from '../department/department-detail/department-detail.component';
import { DepartmentRegisterComponent } from '../department/department-register/department-register.component';
import { SubjectListComponent } from '../subject/subject-list/subject-list.component';
import { DesignationListComponent } from '../designation/designation-list/designation-list.component';


const routes: Routes = [
  {
    path: '',
    component: CPanelComponent,
    children: [
      {
        path: 'student', children: [
          {path: '', component: StudentListComponent},
          {path: ':id', component: StudentDetailComponent},
          {path: 'update/:id', component: StudentUpdateComponent},
          {path: 'create', component: StudentRegisterComponent}
        ]
      },
      {
        path: 'batch', children: [
          {path: '', component: BatchListComponent},
          {path: ':id', component: BatchDetailComponent},
          {path: 'update/:id', component: BatchDetailComponent}
        ]
      },
      {
        path: 'tutor', children: [
          {path: '', component: TutorListComponent},
          {path: ':id', component: TutorDetailComponent},
          {path: 'update/:id', component: TutorUpdateComponent},
          {path: 'create', component: TutorRegisterComponent}
        ]
      },
      {
        path: 'department', children: [
          {path: '', component: DepartmentListComponent},
          {path: ':id', component: DepartmentDetailComponent},
          {path: 'create', component: DepartmentRegisterComponent}
        ]
      },
      {
        path: 'subject', children: [
          {path: '', component: SubjectListComponent}
        ]
      },
      {
        path: 'department', children: [
          {path: '', component: DepartmentListComponent}
        ]
      },
      {
        path: 'designation', children: [
          {path: '', component: DesignationListComponent}
        ]
      },
      { path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
