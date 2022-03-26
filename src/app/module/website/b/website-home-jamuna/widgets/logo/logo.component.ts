import { Component, OnInit, Input } from '@angular/core';

export let LogoSlider: any = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    767: {
      items: 5
    },
    576: {
      items: 4
    },
    480: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @Input() logos: any[] = [];

  public LogoSliderConfig: any = LogoSlider;

  ngOnInit(): void {
  }

}
