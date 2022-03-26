import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderOneModule} from '../../../shared/module/header-one/header-one.module';
import {ThemeLoaderLayoutComponent} from './theme-loader-layout.component';
import {JamunaService} from '../theme-jamuna/layout/jamuna.service';
import {ResizeService} from 'ngx-owl-carousel-o/lib/services/resize.service';

@NgModule({
  declarations: [ThemeLoaderLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeLoaderLayoutComponent,
    }]),
    HeaderOneModule,
  ],
  providers: [JamunaService ]
})
export class ThemeLoaderLayoutModule {}
