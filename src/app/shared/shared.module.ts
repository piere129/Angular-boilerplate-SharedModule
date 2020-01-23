import { NgModule } from '@angular/core';
import { HttpTestComponent } from './components/http-test.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [HttpTestComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HttpTestComponent]
})

export class SharedModule { }
