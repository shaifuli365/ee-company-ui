import {Compiler, Component, ComponentFactory, Injector, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

class CommentDto {
  id: number;
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
    await this.decideTheme().then(async (value) => {
      console.log(value);
      console.log(value.id);
      console.log(typeof value.id);
      if (value.id === '1'){
        await this.loadPadmaTheme();
      }
      else if (value.id === '2'){
        await this.loadJamunaTheme();
      }else{
        await this.loadPadmaTheme();
      }

    });
    console.log(1111);
  }

  async decideTheme(): Promise<any> {
    return await this.httpClient
        .get<CommentDto>('https://5ffdbefed9ddad0017f687c2.mockapi.io/comments/2')
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

