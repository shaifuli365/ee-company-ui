import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderOneModule} from '../../../shared/module/header-one/header-one.module';
import {ThemeLoaderHomeService} from './home/theme-loader-home.service';
import {AuthGuard} from '../../../shared/services/auth/auth.guard';


@Component({
  selector: 'app-theme-loader-layout',
  template: `app-theme-loader-layout<router-outlet></router-outlet>`
})
export class ThemeLoaderLayoutComponent {}

@NgModule({
  declarations: [ThemeLoaderLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ThemeLoaderLayoutComponent,
        children: [
          { path: '', loadChildren: () => import('./home/theme-loader-home.module')
                .then(m => m.ThemeLoaderHomeModule) , canActivate: [AuthGuard] },
        ]
      }
    ]),
    HeaderOneModule,
  ],
  providers: [ThemeLoaderHomeService]
})
export class ThemeLoaderLayoutModule {}
