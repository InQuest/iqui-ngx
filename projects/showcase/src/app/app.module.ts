import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GettingStartedPageModule } from '../pages/howto/getting-started';
import { FunctionalShowcaseModule } from '../pages/documentation/functional';
import { BasicsShowcaseModule } from '../pages/documentation/basics';
import { FormShowcaseModule } from '../pages/documentation/form';
import { ThirdPartyShowcaseModule } from '../pages/documentation/3rdparty';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular dependencies
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // Showcase modules
    GettingStartedPageModule,
    FunctionalShowcaseModule,
    BasicsShowcaseModule,
    FormShowcaseModule,
    ThirdPartyShowcaseModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
