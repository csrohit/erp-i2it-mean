import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorDetailComponent } from '../tutor/tutor-detail/tutor-detail.component';
import { TutorListComponent } from '../tutor/tutor-list/tutor-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':id', component: TutorDetailComponent },
      { path: '', component: TutorListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
