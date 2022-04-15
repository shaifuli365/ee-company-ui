import {Compiler, Component, ComponentFactory, Injector, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseMessage} from '../../../model/ResponseMessage';


@Component({
  selector: 'app-theme-dynamic-page-loader',
  template: ` <ng-container #anchor></ng-container> `
})
export class ThemeDynamicPageLoaderComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  componentFactories: ComponentFactory<any>[];

  constructor(private compiler: Compiler, private injector: Injector, private httpClient: HttpClient) {}

  async ngOnInit(){
    await this.loadJamunaDynamicPageTheme();
  }

  createComponent(factory: ComponentFactory<any>) {
    this.anchor.clear();
    this.anchor.createComponent(factory);
  }

  async loadJamunaDynamicPageTheme() {
    this.loadModule(await import('../../theme-jamuna/dynamic-page/dynamic-page.module').then(m => m.DynamicPageModule));
  }

  private loadModule(moduleType: Type<any>) {
    this.anchor.clear();
    const moduleFactories = this.compiler.compileModuleAndAllComponentsSync(moduleType);
    this.componentFactories = moduleFactories.componentFactories;
    this.anchor.clear();
    this.anchor.createComponent(this.componentFactories[0]);
  }
}

