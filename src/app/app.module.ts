import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import {AuthGuard} from './shared/services/auth/auth.guard';
import {AuthService} from './shared/services/auth/auth.service';
import {AuthInterceptor} from './shared/services/auth/auth.interceptor';

import {PreferenceService} from './shared/services/auth/preference.service';
import {WebsiteModule} from './components/website/website.module';
import {UserInfoService} from './shared/services/auth/user-info.service';
import {RouterModule} from '@angular/router';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    // HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      enableHtml: true,
      closeButton: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    WebsiteModule,
  ],
  providers: [
    AuthService,
    AuthGuard , {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    PreferenceService,
    UserInfoService,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
