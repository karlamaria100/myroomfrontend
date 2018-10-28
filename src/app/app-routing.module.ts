import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PresentationComponent} from "./presentation/presentation.component";
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
export {routes} ;

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
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
