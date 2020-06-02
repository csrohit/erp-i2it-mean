import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';
import { BatchListComponent } from './batch-list/batch-list.component';


@NgModule({
  declarations: [BatchDetailComponent, BatchListComponent],
  imports: [
    CommonModule,
    BatchRoutingModule
  ]
})
export class BatchModule { }
