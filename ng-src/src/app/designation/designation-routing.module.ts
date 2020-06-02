import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationDetailComponent } from './designation-detail/designation-detail.component';
import { DesignationListComponent } from './designation-list/designation-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':id', component: DesignationDetailComponent },
      { path: '', component: DesignationListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
