import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FunctionalShowcaseModule } from '../showcases/functional/iqui-ngx-functional-showcase.module';
import { BasicsShowcaseModule } from '../showcases/basics/iqui-ngx-basics-showcase.module';
import { ThirdPartyShowcaseModule } from '../showcases/3rdparty/iqui-ngx-3rdparty-showcase-module';

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
