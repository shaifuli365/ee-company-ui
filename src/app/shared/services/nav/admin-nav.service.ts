import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from '../windows.service';

export interface Menu {
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({providedIn: 'root'})
export class AdminNavService {

    constructor(@Inject(WINDOW) private window) {
        this.onResize();
        if (this.screenWidth < 991) {
            this.collapseSidebar = true;
        }
    }

    public screenWidth: any;
    public collapseSidebar = false;

    public organizationName = '';

    getItems(organizationName){
        return new BehaviorSubject<Menu[]>([
            {title: 'Dashboard', path: '/' + organizationName + '/ee-admin/dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false},
            {title: 'Brand Setup', path: '/' + organizationName + '/ee-admin/brandSetup', icon: 'box', type: 'link', active: false},
            {title: 'Color Setup', path: '/' + organizationName + '/ee-admin/colorSetup', icon: 'box', type: 'link', active: false},
            {title: 'Product Setup', path: '/' + organizationName + '/ee-admin/productSetup', icon: 'box', type: 'link', active: false},
            {title: 'Product Stock', path: '/' + organizationName + '/ee-admin/productStock', icon: 'box', type: 'link', active: false},
            {title: 'Order', path: '/' + organizationName + '/ee-admin/order', icon: 'box', type: 'link', active: false},
            {title: 'Vendor', path: '/' + organizationName + '/ee-admin/vendor', icon: 'box', type: 'link', active: false},
        ]);
    }

    // Windows width
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenWidth = window.innerWidth;
    }
}
