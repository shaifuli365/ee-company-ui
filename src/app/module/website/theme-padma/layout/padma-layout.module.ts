import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PadmaLayoutComponent} from './padma-layout.component';
import {PadmaHomeComponent} from '../home/padma-home.component';
import {PadmaHeaderComponent} from '../header/padma-header.component';
import {PadmaFooterComponent} from '../footer/padma-footer.component';

@NgModule({
  declarations: [
    PadmaLayoutComponent,
    PadmaHomeComponent,
    PadmaHeaderComponent,
    PadmaFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class PadmaLayoutModule {}
