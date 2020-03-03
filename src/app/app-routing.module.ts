import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component'
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  {path:"", component:CvComponent},
  {path:"experience", component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
