import {Component, Input, OnInit} from '@angular/core';

export let HomeSlider: any = {
  loop: true,
  nav: true,
  dots: false,
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

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() category: string;
  @Input() buttonText: string;
  @Input() buttonClass: string;
  public HomeSliderConfig: any = HomeSlider;

  // Sliders
  public sliders = [{
    title: 'save 10%',
    subTitle: 'fresh vegetables',
    image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'

  }, {
    title: 'save 10%',
    subTitle: 'fresh vegetables',
    image: 'assets/images/placeholder/placeholder.jpg'
  }];


  ngOnInit(): void {
  }

}
