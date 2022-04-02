import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {WebsiteDisplayGroupProductDetailProjection} from '../../../../model/WebsiteDisplayGroupProductDetailProjection';

@Component({
  selector: 'app-display-group',
  templateUrl: './display-group.component.html',
  styleUrls: ['./display-group.component.scss']
})
export class DisplayGroupComponent implements OnInit, OnChanges {

  p/*ublic ProductSliderConfig: any = {
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
  };*/

  @Input() organizationName: string;

  productDetailList:Array<WebsiteDisplayGroupProductDetailProjection> = [];
  @Input() displayGroupWithProductDetailList: Array<WebsiteDisplayGroupProductDetailProjection>;
  @Input() displayGroup : WebsiteDisplayGroupProductDetailProjection;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.productDetailList = changes['displayGroupWithProductDetailList'].currentValue
      .filter(e => e.wdgId === changes['displayGroup'].currentValue.wdgId && e.pdId);
  }

}
