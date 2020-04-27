import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { IqUiNgxModule } from '../../../iqui-ngx/src';
import { AppRoutingModule } from './app-routing.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { GettingStartedPageModule } from './pages/howto/getting-started';
import { FunctionalShowcaseModule } from './pages/documentation/functional';
import { BasicsShowcaseModule } from './pages/documentation/basics';
import { FormShowcaseModule } from './pages/documentation/form';
import { CodeShowcaseModule } from './pages/documentation/code';
import { ShowcasingShowcaseModule } from './pages/documentation/showcase';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular dependencies
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // Menu modules
    CdkTreeModule,
    // IqUI Library module
    IqUiNgxModule,
    // Showcase modules
    GettingStartedPageModule,
    FunctionalShowcaseModule,
    BasicsShowcaseModule,
    FormShowcaseModule,
    CodeShowcaseModule,
    ShowcasingShowcaseModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
