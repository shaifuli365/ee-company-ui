import {Component, OnInit} from '@angular/core';
import {WebsiteService} from './website.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-website',
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
    menuTitleList = [];
    organizationName;
    menuName;
    constructor( private location: Location, private websiteService: WebsiteService,
                 private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        /*console.log(this.location.path());
        console.log( decodeURIComponent(this.location.path())) ;*/
        const list = decodeURIComponent(this.location.path()).split('/');
        this.organizationName = list[1];
        this.menuName = list[2];
        this.getMenuList(list[1]);
    }

    getMenuList(organizationName){
        this.websiteService.getMenuList(organizationName).subscribe(res => {
            this.menuTitleList = res.data;
        }, err => {});
    }

}
