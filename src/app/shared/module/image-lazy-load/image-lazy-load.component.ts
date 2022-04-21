import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'image-lazy-load',
  templateUrl: './image-lazy-load.component.html',
  styleUrls: ['./image-lazy-load.component.scss']
})
export class ImageLazyLoadComponent implements OnInit {

  @Input() src  = '';
  @Input() defaultSrc  = 'assets/images/study.jpg';
  @Input() lazy  = true;
  @Input() width  = '160';
  @Input() height  = '130';

  ngOnInit(): void {}

}
