import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JamunaHeaderComponent} from '../header/jamuna-header.component';

@NgModule({
  declarations: [
    JamunaHeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    JamunaHeaderComponent,
  ],
  providers: []
})
export class JamunaHeaderModule {}
