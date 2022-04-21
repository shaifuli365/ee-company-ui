import { Component, OnInit, Input } from '@angular/core';
import {WebsiteBannerDto} from '../../../../dto/WebsiteBannerDto';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit {

  @Input() websiteBannerDtoList: WebsiteBannerDto[];

  public HomeSliderConfig: any = {
    loop: true,
    nav: true,
    dots: true,
    navContainerClass: 'owl-nav',
    navClass: [ 'owl-prev', 'owl-next' ],
    navText: [ '<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  };

  constructor() { }

  ngOnInit(): void {}

}
