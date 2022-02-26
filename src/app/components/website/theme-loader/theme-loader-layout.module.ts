import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderOneModule} from '../../../shared/module/header-one/header-one.module';
import {ThemeLoaderHomeService} from './home/theme-loader-home.service';
import {ThemeLoaderLayoutComponent} from './theme-loader-layout.component';

@NgModule({
  declarations: [ThemeLoaderLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ThemeLoaderLayoutComponent,
      }
    ]),
    HeaderOneModule,
  ],
  providers: [ThemeLoaderHomeService]
})
export class ThemeLoaderLayoutModule {}
