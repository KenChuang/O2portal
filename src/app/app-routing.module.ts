import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaultManagementComponent } from './fault-management/fault-management.component';
import { NfManagementComponent } from './nf-management/nf-management.component';
import { OCloudManagementComponent } from './o-cloud-management/o-cloud-management.component';
import { PerformanceManagementComponent } from './performance-management/performance-management.component';
import { ServerManagementComponent } from './server-management/server-management.component';
import { SoftwareManagementComponent } from './software-management/software-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
