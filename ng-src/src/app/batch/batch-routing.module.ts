import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';
import { BatchListComponent } from './batch-list/batch-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: ':id', component: BatchDetailComponent },
      { path: '', component: BatchListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
