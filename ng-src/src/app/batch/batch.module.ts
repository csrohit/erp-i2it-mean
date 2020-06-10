import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchRegisterComponent } from './batch-register/batch-register.component';


@NgModule({
  declarations: [BatchDetailComponent, BatchListComponent, BatchRegisterComponent],
  imports: [
    CommonModule,
    BatchRoutingModule,
    FormsModule
  ],
  exports: [
    BatchDetailComponent,
    BatchListComponent
  ]
})
export class BatchModule { }
