import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image-lazy.component.html',
  styleUrls: ['./image-lazy.component.scss']
})
export class ImageLazyComponent implements OnInit {

  @Input() src  = '';
  @Input() defaultSrc  = 'assets/images/study.jpg';
  @Input() lazy  = true;

  ngOnInit(): void {

  }
}
