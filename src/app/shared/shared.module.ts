import { NgModule } from '@angular/core';
import { HttpTestComponent } from './components/http-test.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [HttpTestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [HttpTestComponent]
})

export class SharedModule { }
