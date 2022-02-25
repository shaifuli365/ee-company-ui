import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderOneModule} from '../../shared/module/header-one/header-one.module';
import {ThemeLoaderHomeService} from './theme-loader/home/theme-loader-home.service';
import {AuthGuard} from '../../shared/services/auth/auth.guard';

@Component({
  selector: 'app-website',
  template: `<router-outlet></router-outlet>`
})
export class WebsiteComponent implements OnInit {
  ngOnInit(): void {}
}

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: WebsiteComponent,
        children: [
          {path: '', loadChildren: () => import('./theme-loader/theme-loader-layout.module')
                .then(m => m.ThemeLoaderLayoutModule) , canActivate: [AuthGuard] },
        ]
      }
    ]),
    HeaderOneModule,
  ],
  providers: [ThemeLoaderHomeService]
})
export class WebsiteModule {}


