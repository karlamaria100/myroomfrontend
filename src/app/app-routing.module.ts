import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PresentationComponent} from "./presentation/presentation.component";
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardLandingComponent} from './dashboard-landing/dashboard-landing.component';
import {AuthGuard} from './auth.service';
import {RegisterComponent} from './register/register.component';
export {routes} ;

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
    , children: [

  {path: '', component: DashboardLandingComponent, canActivateChild: [AuthGuard]},
  // {path: 'employees', component: DashboardEmployeesComponent},
  // {path: 'projects', component: DashboardProjectsComponent},
  // //{path: 'reports', component: DashboardReportsComponent},
  // {path: 'hours', component: HoursComponent},
  // {path: 'edit-profile', component: EditProfileComponent},
  // {path: 'vacations', component: VacationsComponent},
  // {path: 'estimates', component: EstimatesComponent}
  ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
