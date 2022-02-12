import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-display-group',
  templateUrl: './display-group.component.html',
  styleUrls: ['./display-group.component.scss']
})
export class DisplayGroupComponent implements OnInit, OnChanges {
  public ProductSliderConfig: any = {
    loop: true,
    dots: true,
    navSpeed: 300,
    responsive: {
      991: {
        items: 4
      },
      767: {
        items: 3
      },
      420: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  };

  @Input() displayGroupWithProductDetailList;
  @Input() displayGroupUnique;
  @Input() organizationName;
  productDetailList = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.productDetailList = changes.displayGroupWithProductDetailList.currentValue
      .filter(item => item.websiteDisplayGroup.id === changes.displayGroupUnique.currentValue.id)
      .map(item => item.productDetail);
  }

}
