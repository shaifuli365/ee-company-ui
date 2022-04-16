import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-not-found-layout',
  template: `<h1>Not Found</h1>`
})
export class NotFoundLayoutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}

@NgModule({
  declarations: [
    NotFoundLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class NotFoundLayoutModule {}
