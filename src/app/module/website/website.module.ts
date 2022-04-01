import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderOneModule} from '../../shared/module/header-one/header-one.module';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {WebsiteHomeService} from './service/website-home.service';
import {CarouselModule} from 'ngx-owl-carousel-o';

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
    CarouselModule,
    HeaderOneModule,
  ],
  providers: [
    AuthGuard,WebsiteHomeService
  ]
})
export class WebsiteModule {}


