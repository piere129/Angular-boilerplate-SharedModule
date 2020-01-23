import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpTestComponent } from './shared/components/http-test.component';

const routes: Routes = [
  { path: 'heroes',    loadChildren: './heroes/heroes.module#HeroesModule'},
  { path: 'another',    component: HttpTestComponent},
  { path: 'last',    loadChildren: './heroes/heroes.module#HeroesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }