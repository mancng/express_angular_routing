import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LosAngelesComponentComponent } from './los-angeles-component/los-angeles-component.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LosAngelesComponentComponent,
    SeattleComponentComponent,
    SanJoseComponentComponent,
    DallasComponentComponent,
    WashingtonComponentComponent,
    ChicagoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
