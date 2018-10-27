import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PresentationComponent} from "./presentation/presentation.component";
export {routes} ;

const routes: Routes = [
  {path: '', component: PresentationComponent},
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
