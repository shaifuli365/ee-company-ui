import { Component, OnInit, Input } from '@angular/core';

export let CollectionSlider: any = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @Input() categories: any[];
  @Input() category: string;
  @Input() class: string;

  constructor() { }

  ngOnInit(): void {
  }

   public CollectionSliderConfig: any = CollectionSlider;

}
