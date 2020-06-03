import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPanelComponent } from './c-panel/c-panel.component';
import { StudentRegisterComponent } from '../student/student-register/student-register.component';
import { TutorRegisterComponent } from '../tutor/tutor-register/tutor-register.component';
import { SubjectRegisterComponent } from '../subject/subject-register/subject-register.component';
import { BatchRegisterComponent } from '../batch/batch-register/batch-register.component';
import { DesignationRegisterComponent } from '../designation/designation-register/designation-register.component';
import { DepartmentRegisterComponent } from '../department/department-register/department-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CPanelComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'student', component: StudentRegisterComponent},
          { path: 'tutor', component: TutorRegisterComponent},
          { path: 'batch', component: BatchRegisterComponent},
          { path: 'subject', component: SubjectRegisterComponent},
          { path: 'department', component: DepartmentRegisterComponent},
          { path: 'designation', component: DesignationRegisterComponent},
          { path: '', component: DashboardComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
