import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jamuna-header',
  templateUrl: './jamuna-header.component.html',
  styleUrls: ['./jamuna-header.component.scss']
})
export class JamunaHeaderComponent implements OnInit {

  @Input() menuTitleList:Array<string>;

  constructor() {}

  ngOnInit(): void {

  }

}
