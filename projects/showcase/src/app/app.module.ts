// Import dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Import showcase module
import { IqUiNgxModule } from '../../../iqui-ngx/src/public-api';

// Import ašš and pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingStartedPageModule } from './getting-started';

@NgModule({
  imports: [
    // Angular dependencies
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // IQUI module and pages
    GettingStartedPageModule,
    IqUiNgxModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
