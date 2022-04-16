import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {WebsiteDynamicPageService} from '../../service/website-dynamic-page.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent implements OnInit {

  constructor( private location: Location,  private router: Router, private activatedRoute: ActivatedRoute,
               private websiteDynamicPageService: WebsiteDynamicPageService) {}

  websiteMenu = {title: '', content : ''};

  ngOnInit(): void {
    console.log(this.location.path());
    console.log( decodeURIComponent(this.location.path())) ;
    /*this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){
        console.log(val, this.location.path());
        console.log( decodeURIComponent(this.location.path())) ;
        // this.router.navigate(['/my-business/organization-select']);
      }
    });*/
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

}
