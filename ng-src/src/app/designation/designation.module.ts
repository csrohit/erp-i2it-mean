import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationDetailComponent } from './designation-detail/designation-detail.component';
import { DesignationListComponent } from './designation-list/designation-list.component';


@NgModule({
  declarations: [DesignationDetailComponent, DesignationListComponent],
  imports: [
    CommonModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
