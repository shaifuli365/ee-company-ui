import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit  {
  @Input() var;
  @Input() lable = 'debug';

  constructor() {}

  ngOnInit() {}

  print() {
    console.log(this.var);
    console.log(typeof this.var);
  }
}
