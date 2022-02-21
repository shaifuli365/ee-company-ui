import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {DynamicPageComponent} from './dynamic-page.component';
import {DynamicPageService} from './dynamic-page.service';

@NgModule({
  declarations: [
    DynamicPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicPageComponent,
        data: {
          title: 'WebsiteSetup',
          breadcrumb: 'WebsiteSetup'
        }
      },
    ]),
  ],
  providers: [DynamicPageService]
})
export class DynamicPageModule { }
