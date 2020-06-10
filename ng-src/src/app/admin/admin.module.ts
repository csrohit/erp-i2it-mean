import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { AdminRoutingModule } from './admin-routing.module';
import { BatchModule } from '../batch/batch.module';
import { StudentModule } from '../student/student.module';

/* Components */
import { CPanelComponent } from './c-panel/c-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    CPanelComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    AdminRoutingModule,
    FormsModule,
    BatchModule,
    StudentModule
  ],
  providers: []
})
export class AdminModule { }
