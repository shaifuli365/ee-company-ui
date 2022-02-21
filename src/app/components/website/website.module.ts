import {Injectable, NgModule} from '@angular/core';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {WebsiteComponent} from './website.component';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {CommonModule} from '@angular/common';
import {HeaderOneModule} from '../../shared/module/header-one/header-one.module';
import {WebsiteService} from './website.service';

@Injectable()
export class RouteDecideService{

  constructor() {}

  getSeletedThemeForOrg(): string {
    localStorage.setItem('selectedTheme', 'padma');
    return localStorage.getItem('selectedTheme');
    //return 'padma';
  }
}

export function getRoutes(rds: RouteDecideService) {
  let routes: Routes = [];
  if (rds.getSeletedThemeForOrg() === 'padma'){
    routes = [ { path: '', component: WebsiteComponent, children: [
          {path: '', loadChildren: () => import('./website-home-padma/website-home-padma.module')
                .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] }
        ]}
    ];
  }
  if (rds.getSeletedThemeForOrg() === 'jamuna'){
    routes = [ { path: '', component: WebsiteComponent, children: [
        {path: ':orgName/jamuna', loadChildren: () => import('./website-home-jamuna/website-home-jamuna.module')
              .then(m => m.WebsiteHomeJamunaModule) , canActivate: [AuthGuard] },
      ]}
    ];
  }
  return routes;
}

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([])],
  providers: [
    {
      provide: ROUTES,
      useFactory: getRoutes,
      deps: [RouteDecideService],
      multi: true,
    },
    RouteDecideService,
  ]
})
export class RouterDecideModule { }

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    // WebsiteRoutingModule,
    RouterDecideModule,
    HeaderOneModule,
  ],
  providers: [WebsiteService]
})
export class WebsiteModule {}


