import {
  Compiler,
  Component,
  ComponentFactory,
  Injector,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-theme-single-product-loader',
  template: ` <ng-container #anchor></ng-container> `
})
export class ThemeSingleProductLoaderComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  componentFactories: ComponentFactory<any>[];

  constructor(private compiler: Compiler, private injector: Injector, private httpClient: HttpClient) {}

  async ngOnInit(){
    await this.loadJamunaSingleProductTheme();
  }

  createComponent(factory: ComponentFactory<any>) {
    this.anchor.clear();
    this.anchor.createComponent(factory);
  }

  async loadJamunaSingleProductTheme() {
    this.loadModule(await import('../../theme-jamuna/single-product/single-product.module').then(m => m.SingleProductModule));
  }

  private loadModule(moduleType: Type<any>) {
    this.anchor.clear();
    const moduleFactories = this.compiler.compileModuleAndAllComponentsSync(moduleType);
    this.componentFactories = moduleFactories.componentFactories;
    this.anchor.clear();
    this.anchor.createComponent(this.componentFactories[0]);
  }
}

