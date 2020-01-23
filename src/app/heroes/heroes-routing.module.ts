import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HttpTestComponent } from '../shared/components/http-test.component';

const routes: Routes = [
  { path: '',  component: HeroesComponent},
  { path: 'http', component: HttpTestComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }