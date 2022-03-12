import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ThemeLoaderHomeService} from './theme-loader-home.service';
import {ThemeLoaderHomeComponent} from './theme-loader-home.component';


@NgModule({
  declarations: [ThemeLoaderHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ThemeLoaderHomeComponent
      }
    ])
  ],
  providers: [ThemeLoaderHomeService]
})
export class ThemeLoaderHomeModule {}
