import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    // needs sharedmodule for the httptest route to work here, otherwise it doens't recognise the component
    SharedModule
  ]
})
export class HeroesModule { }
