import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ThirdPartyShowcaseModule } from '../showcases/3rdparty';
import { FunctionalShowcaseModule } from '../showcases/functional';
import { BasicsShowcaseModule } from '../showcases/basics';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular dependencies
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // Showcase modules
    FunctionalShowcaseModule,
    BasicsShowcaseModule,
    ThirdPartyShowcaseModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
