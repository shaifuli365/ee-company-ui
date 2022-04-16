import {Compiler, Component, ComponentFactory, Injector, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseMessage} from '../../../model/ResponseMessage';

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
export class ThemeHomeLoaderComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  componentFactories: ComponentFactory<any>[];

  constructor(private compiler: Compiler, private injector: Injector, private httpClient: HttpClient) {}

  async ngOnInit(){

    //await this.loadPadmaTheme();
    await this.loadJamunaTheme();
    /*await this.decideTheme().then(async (ws: ResponseMessage<WebsiteSetup> | undefined) => {
      console.log(ws);
      if (ws && ws.data.websiteTemplateDetailIndexPageId === 1){
        await this.loadPadmaTheme();
      }
      else if (ws && ws.data.websiteTemplateDetailIndexPageId === 2){
        await this.loadJamunaTheme();
      }else{
        await this.loadNotFoundTheme();
      }
    }).catch( (ws: WebsiteSetup | undefined) => { this.loadNotFoundTheme() });*/
  }

  async decideTheme(): Promise<ResponseMessage<WebsiteSetup> | undefined> {
    return await this.httpClient
        .post<ResponseMessage<WebsiteSetup> | undefined>('http://localhost:9092/api/v1/websiteSetup/getSelectedTheme',{organizationWebAddress: 'diu.com'})
        .toPromise();
  }

  createComponent(factory: ComponentFactory<any>) {
    this.anchor.clear();
    this.anchor.createComponent(factory);
  }

  async loadPadmaTheme() {
    //console.log('loading padma theme');
    this.loadModule(await import('../../theme-padma/layout/padma-layout.module').then(m => m.PadmaLayoutModule));
  }

  async loadJamunaTheme() {
    //console.log('loading jamuna theme');
    this.loadModule(await import('../../theme-jamuna/layout/jamuna-layout.module').then(m => m.JamunaLayoutModule));
  }

  async loadNotFoundTheme() {
    //console.log('Not found');
    this.loadModule(await import('../../theme-not-found/not-found-layout.module').then(m => m.NotFoundLayoutModule));
  }

  private loadModule(moduleType: Type<any>) {
    this.anchor.clear();
    const moduleFactories = this.compiler.compileModuleAndAllComponentsSync(moduleType);
    this.componentFactories = moduleFactories.componentFactories;
    this.anchor.clear();
    this.anchor.createComponent(this.componentFactories[0]);
  }
}

