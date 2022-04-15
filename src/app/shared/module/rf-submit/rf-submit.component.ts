import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'rf-submit',
  templateUrl: './rf-submit.component.html',
  styleUrls: ['./rf-submit.component.scss']
})
export class RfSubmitComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: boolean;
  @Input() mode: 'save' | 'update' | 'search' = 'save';

  @Input() parentFg: FormGroup;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() clear: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

}
