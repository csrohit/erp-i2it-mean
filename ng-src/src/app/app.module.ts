import { StudentService } from './services/student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CpanelComponent } from './components/cpanel/cpanel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TutorRegisterComponent } from './components/tutor-register/tutor-register.component';

import { AuthService } from './services/auth.service';
import { DepartmentService } from './services/department.service';
import { DesignationService } from './services/designation.service';
import { BatchService } from './services/batch.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    CpanelComponent,
    ProfileComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    TutorRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, StudentService, DepartmentService, DesignationService, DepartmentService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
