import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpTestComponent } from './shared/components/http-test.component';

const routes: Routes = [
  { path: 'heroes',    loadChildren: './heroes/heroes.module#HeroesModule'},
  { path: 'another',   loadChildren: './shared/shared.module#SharedModule'},
  { path: 'last',     component: HttpTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }