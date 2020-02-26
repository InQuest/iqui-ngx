// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule, ThirdPartyModule } from '../../../iqui-ngx-elements/src';

// Import playground components
import { PlaygroundComponent } from './playground';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:      [ CommonModule, FormModule, ThirdPartyModule ],
  declarations: [ PlaygroundComponent ],
  exports:      [ PlaygroundComponent ]
})
export class PlaygroundModule { }
