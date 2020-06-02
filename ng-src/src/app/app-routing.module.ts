import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)},
  { path: 'designation', loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule)},
  { path: 'batch', loadChildren: () => import('./batch/batch.module').then(m => m.BatchModule)},
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
  { path: 'tutor', loadChildren: () => import('./tutor/tutor.module').then(m => m.TutorModule)},
  { path: '', redirectTo: 'admin/student', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
