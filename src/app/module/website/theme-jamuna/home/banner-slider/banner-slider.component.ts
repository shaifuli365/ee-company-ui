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
    dots: true,
    navSpeed: 300,
    responsive: {
      991: {
        items: 1
      },
      767: {
        items: 1
      },
      420: {
        items: 1
      },
      0: {
        items: 1
      }
    }
  };

  constructor() { }

  ngOnInit(): void {}

}
