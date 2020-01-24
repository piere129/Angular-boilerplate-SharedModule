import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpTestComponent } from './components/http-test.component';

const routes: Routes = [
  { path: '',   component: HttpTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }