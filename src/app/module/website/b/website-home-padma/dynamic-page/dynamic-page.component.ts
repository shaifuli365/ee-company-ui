import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {DynamicPageService} from './dynamic-page.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent implements OnInit {

  constructor( private location: Location,  private router: Router, private activatedRoute: ActivatedRoute,
               private dynamicPageService: DynamicPageService) {}

  public orgName = '';
  public menuTitle = '';
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
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params.orgName);
      console.log(params.dynamicPage);
      this.orgName = params.orgName;
      this.menuTitle = params.dynamicPage;
      this.getWebsiteMenu(this.orgName, this.menuTitle);
    });
  }

  getWebsiteMenu(orgName, menuTitle){
      this.dynamicPageService.getWebsiteMenu(orgName, menuTitle).subscribe(res => {
          this.websiteMenu = res.data;
      }, err => {});
  }

}
