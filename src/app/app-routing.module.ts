import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerdashComponent } from './managerdash/managerdash.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { AdminauthguardService } from './adminauthguard.service';
import { AddworkComponent } from './addwork/addwork.component';
import { ViewWorkComponent } from './view-work/view-work.component';
import { EmployeeAuthGuardService } from './employeeauthguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ManagerAuthGuardService } from './managerauthguard.service'; // Import guard
import { RoleGuardService } from './roleguard.service'; // Import RoleGuardService
import { ShowattendanceComponent } from './showattendance/showattendance.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'adlogin',component:AdminloginComponent},
  {path:'admindash',component:AdmindashComponent,canActivate:[AdminauthguardService]},  // Only admins
  { path: 'addEmployee', component: EmployeeFormComponent, canActivate: [RoleGuardService] },

  {path: 'managerlogin',component:ManagerloginComponent},
  {path: 'managerdash', component:ManagerdashComponent,canActivate:[ManagerAuthGuardService]},  // Only managers
  {path: 'attendance-sheet', component:AttendanceSheetComponent,canActivate:[ManagerAuthGuardService]},  // Open access (adjust if needed)
  {path: 'employeelogin',component:EmployeeloginComponent},
  {path: 'employeedash',component:EmployeedashComponent,canActivate:[EmployeeAuthGuardService]},   // Only employees
  {path: 'addwork',component:AddworkComponent},  // Only employees
  {path: 'viewwork',component:ViewWorkComponent,canActivate:[AdminauthguardService]},   // Only employees
  { path: 'managerdash', component: ManagerdashComponent, canActivate: [ManagerAuthGuardService] },  // Protect the route
  // Unauthorized access route
  { path: 'unauthorized', component: UnauthorizedComponent },
  {path: 'showattendance',component:ShowattendanceComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
