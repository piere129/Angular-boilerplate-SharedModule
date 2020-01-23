# AngularNewstructure

Angular Modules:

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
 

Shared module kan componenten binnen deze module, sharen met andere componenten. Willen ze de selector gebruiken, dan MOET de component ook gedeclareerd worden in de exports! 

App.module.ts:
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
app.component.html:
<div>
  <app-http-test></app-http-test>
</div>

-------------------------------------------------

Services Angular:

import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'  //can also be f.e. ‘UserModule’
})
export class HttpService {
 
  constructor() { }
}
 

Injectable provided in: ‘root’ zal de service op root niveau eenmalig declareren als singleton, geshared onder alle components. Als men liever de service enkel in bepaalde modules wil toelaten dan kan men een specific module meegeven in providedIn. Een andere optie is om hem mee te geven in de module zelf:
@NgModule({
  providers: [UserService],
})
export class UserModule {
}


-------------------------------------------

Directives angular:

directives zijn extended HTML attributen om custom logic uit te voeren zoals *ngIf of *ngForEach. Men kan ook zijn eigen directives declareren en gebruiken!
