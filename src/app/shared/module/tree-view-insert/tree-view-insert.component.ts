import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Item {
  caId: number;
  caName: string;
  caLevel: number;
  type: string;
  selected: boolean;
  accChartOfAccountGroup?: Item;
  accChartOfAccountChildList?: Item[];
  expand: boolean;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tree-view-insert',
  templateUrl: './tree-view-insert.component.html',
  styleUrls: ['./tree-view-insert.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('500ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ]),
    trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(250, style({ height: '*' }))
      ])
    ])
  ]
})
export class TreeViewInsertComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() itemList: Item[];
  @Input() depth: number;
  sltItem = {caId: 0};

  @Output() updateCaHead: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  constructor() {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: Item): void {
    console.log(item);
    this.sltItem = item;
    if (item.expand === null || item.expand === undefined){
      item.expand = true;
    }
    else if (item.expand === true){
      item.expand = false;
    }
    else if (item.expand === false){
      item.expand = true;
    }
    console.log(item);
  }

  save(value: string, item) {
    this.updateCaHead.emit({value, parent: item});
  }
}
