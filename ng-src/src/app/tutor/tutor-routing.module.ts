import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorListComponent } from './tutor-list/tutor-list.component';


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
export class TutorRoutingModule { }
