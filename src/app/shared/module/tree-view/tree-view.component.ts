import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Item {
  id: number;
  displayName: string;
  selected: boolean;
  childItemList?: Item[];
  expand: boolean;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
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
export class TreeViewComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() itemList: Item[];
  @Input() depth: number;
  sltItem = {id: 0};

  @Output() navClicked: EventEmitter<any> = new EventEmitter();

  /*itemList = [
    {
      id: 1,
      displayName: 'Dashboard',
      selected: false,
      childItemList: []
    },
    {
      id: 2,
      displayName: 'Choose organization',
      selected: false,
      childItemList: []
    },
    {
      id: 3,
      displayName: 'Basic setup',
      selected: false,
      childItemList: [
        {
          id: 4,
          displayName: 'Brand Setup',
          selected: false,
        },
        {
          id: 5,
          displayName: 'Color setup',
          selected: false,
        }
      ]
    },
    {
      id: 6,
      displayName: 'Employee',
      selected: false,
      childItemList: [
        {
          id: 7,
          displayName: 'Role assign',
          selected: false,
        },
      ]},
    {
      id: 8,
      displayName: 'Products',
      selected: false,
      childItemList: [
        {
          id: 9,
          displayName: 'Generate Avg. purchase price',
          selected: false,
        },
      ]
    },
    {
      id: 10,
      displayName: 'Order Management',
      selected: false,
      childItemList: [
        {
          id: 111,
          displayName: 'Order status',
          selected: false,
        },
        {
          id: 112,
          displayName: 'Ready For Delivery',
          selected: false,
        },
        {
          id: 113,
          displayName: 'Order Returned',
          selected: false,
        },
        {
          id: 114,
          displayName: 'Refund and dispute',
          selected: false,
        },
      ]
    },
    {
      id: 11,
      displayName: 'Accounts',
      selected: false,
      childItemList: [
        {
          id: 12,
          displayName: 'Expenses',
          selected: false,
        },
        {
          id: 13,
          displayName: 'Fixed Asset',
          selected: false,
        },
      ]
    },
    {
      id: 14,
      displayName: 'Website',
      selected: false,
      childItemList: []
    },
    {
      id: 15,
      displayName: 'Business Analytics',
      selected: false,
    },

  ];*/

  ngOnInit(): void {}

  constructor() {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: Item): void {
    console.log(item);
    this.sltItem = item;
    this.navClicked.emit(item);
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
}
