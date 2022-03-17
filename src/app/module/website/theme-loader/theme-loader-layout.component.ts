import {Compiler, Component, ComponentFactory, Injector, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

class WebsiteSetup {
  id: number;
  websiteTemplateDetailIndexPageId: number;
  websiteTemplateDetailCategoryProductPageId: number;
  websiteTemplateDetailSingleProductPageId: number;
  websiteTemplateDetailProductGroupPageId: number;


  constructor(id: number, websiteTemplateDetailIndexPageId: number, websiteTemplateDetailCategoryProductPageId: number,
              websiteTemplateDetailSingleProductPageId: number, websiteTemplateDetailProductGroupPageId: number) {
    this.id = id;
    this.websiteTemplateDetailIndexPageId = websiteTemplateDetailIndexPageId;
    this.websiteTemplateDetailCategoryProductPageId = websiteTemplateDetailCategoryProductPageId;
    this.websiteTemplateDetailSingleProductPageId = websiteTemplateDetailSingleProductPageId;
    this.websiteTemplateDetailProductGroupPageId = websiteTemplateDetailProductGroupPageId;
  }
}

@Component({
  selector: 'app-theme-loader-layout',
  template: ` <ng-container #anchor></ng-container> `
})
export class ThemeLoaderLayoutComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  componentFactories: ComponentFactory<any>[];

  constructor(private compiler: Compiler, private injector: Injector, private httpClient: HttpClient) {}

  async ngOnInit(){
    await this.decideTheme().then(async (ws: WebsiteSetup | undefined) => {
      if (ws && ws.websiteTemplateDetailIndexPageId === 1){
        await this.loadPadmaTheme();
      }
      else if (ws && ws.websiteTemplateDetailIndexPageId === 2){
        await this.loadJamunaTheme();
      }else{
        await this.loadJamunaTheme();
      }
    });
  }

  async decideTheme(): Promise<WebsiteSetup | undefined> {
    return await this.httpClient
        .post<WebsiteSetup>('http://localhost:9092/api/v1/websiteSetup/getSelectedTheme',{organizationWebAddress: 'diu'})
        .toPromise();
  }

  createComponent(factory: ComponentFactory<any>) {
    this.anchor.clear();
    this.anchor.createComponent(factory);
  }

  async loadPadmaTheme() {
    console.log('loading padma theme');
    this.loadModule(await import('../theme-padma/layout/padma-layout.module').then(m => m.PadmaLayoutModule));
  }

  async loadJamunaTheme() {
    console.log('loading jamuna theme');
    this.loadModule(await import('../theme-jamuna/layout/jamuna-layout.module').then(m => m.JamunaLayoutModule));
  }

  private loadModule(moduleType: Type<any>) {
    this.anchor.clear();
    const moduleFactories = this.compiler.compileModuleAndAllComponentsSync(moduleType);
    this.componentFactories = moduleFactories.componentFactories;
    this.anchor.clear();
    this.anchor.createComponent(this.componentFactories[0]);
  }
}

