import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'Question',component: QuestionsComponent},
  {path:'Result',component: ResultComponent},
  {path:'',component: DashboardComponent},
  {path: '**',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
