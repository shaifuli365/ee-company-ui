import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-padma-layout',
  template: `
    <app-padma-header></app-padma-header>
    <app-padma-home></app-padma-home>
    <app-padma-footer></app-padma-footer>
  `
})
export class PadmaLayoutComponent implements OnInit {

  constructor(private vcr: ViewContainerRef,
              private cfr: ComponentFactoryResolver) {
    this.fn();
  }

  ngOnInit(): void {}

  async fn() {

  }


}
