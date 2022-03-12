import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ThemeLoaderHomeService} from './theme-loader-home.service';

@Component({
  selector: 'app-theme-loader-home',
  template: `app-theme-loader-home`
})
export class ThemeLoaderHomeComponent implements OnInit {

  organizationName = '';

  constructor(private vcr: ViewContainerRef,
              private cfr: ComponentFactoryResolver,
              private router: Router,
              private themeLoaderHomeService: ThemeLoaderHomeService,
              private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {});
    this.activatedRoute.params.subscribe((params: Params) => {
      // this.organizationName = params['orgName'];
      this.loadThemeLayoutComponent('diu');
    });
    /*const list = decodeURIComponent(this.location.path()).split('/');
    this.organizationName = '';
    this.menuName = list[2];*/
  }

  loadThemeLayoutComponent(orgName: string){
    this.themeLoaderHomeService.getOrgSelectedTheme(orgName).subscribe(res => {
      // this.loadThemeByName(res['']);
      this.loadThemeByName('padma');
    }, err => {
      this.loadThemeByName('padma');
      console.log(err);
    });
  }

  async loadThemeByName(themeName: string){
    this.vcr.clear();
    if (themeName === 'padma'){
      /*const { PadmaLayoutComponent } = await import('../../theme-padma/layout/padma-layout.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(PadmaLayoutComponent));

      const { PadmaHeaderComponent } = await import('../../theme-padma/header/padma-header.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(PadmaHeaderComponent));*/

      const { PadmaHomeComponent } = await import('../../theme-padma/home/padma-home.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(PadmaHomeComponent));

      /*const { PadmaFooterComponent } = await import('../../theme-padma/footer/padma-footer.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(PadmaFooterComponent));*/

    }
    else if (themeName === 'jamuna'){
      const { JamunaLayoutComponent } = await import('../../theme-jamuna/layout/jamuna-layout.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(JamunaLayoutComponent));
    }
  }

}
