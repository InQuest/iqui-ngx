import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FunctionalShowcaseModule } from '../showcases/functional/iq-ui-ngx-functional-showcase.module';
import { BasicsShowcaseModule } from '../showcases/basics/iq-ui-ngx-basics-showcase.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular dependencies
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // Showcase modules
    FunctionalShowcaseModule,
    BasicsShowcaseModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
