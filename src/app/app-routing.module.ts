import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WebprojectsComponent } from './components/webprojects/webprojects.component';

const routes: Routes = [
  {path:"Dashboard", component:DashboardComponent},
  {path:"Resume", component:ResumeComponent},
  {path:"About", component:AboutComponent},
  {path:"Interaction", component:InteractionComponent},
  {path:"web-projects/:category", component:WebprojectsComponent},
  {path:"data-projects/:category", component:WebprojectsComponent},
  {path:"desktop-projects/:category", component:WebprojectsComponent},
  {path:"", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
