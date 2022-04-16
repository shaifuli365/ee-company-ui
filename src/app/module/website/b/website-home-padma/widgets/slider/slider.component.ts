import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-banner-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliders: any[];

  public HomeSliderConfig: any = {
    loop: true,
    nav: true,
    dots: true,
    navContainerClass: 'owl-nav',
    navClass: [ 'owl-prev', 'owl-next' ],
    navText: [ 'left', 'right' ],
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
