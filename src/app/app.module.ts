import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Correct import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerdashComponent } from './managerdash/managerdash.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { AddworkComponent } from './addwork/addwork.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewWorkComponent } from './view-work/view-work.component';
import { AdminauthService } from './adminauth.service';
import { AdminauthguardService } from './adminauthguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ShowattendanceComponent } from './showattendance/showattendance.component';



@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    HomeComponent,
    LoginComponent,
    AdminloginComponent,
    EmployeeFormComponent,
    ManagerloginComponent,
    ManagerdashComponent,
    AttendanceSheetComponent,
    EmployeeloginComponent,
    EmployeedashComponent,
    AddworkComponent,
    ViewWorkComponent,
    UnauthorizedComponent,
    ShowattendanceComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()), // Correct provider configuration
    AdminauthService, 
    AdminauthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
