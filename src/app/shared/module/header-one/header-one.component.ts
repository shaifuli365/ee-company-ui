import { Component, OnInit, Input, HostListener } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

    @Input() class: string;
    @Input() topbar = true;
    @Input() sticky = false;
    @Input() sidemenu = false;

    public stick = true;


    constructor( private authService: AuthService , private router: Router) { }

    ngOnInit(): void {}

    logout(){
        this.authService.logout();
        this.router.navigate(['/login']);
    }


    /*@HostListener('window:scroll', [])
    onWindowScroll() {
        // tslint:disable-next-line:variable-name
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 150 && window.innerWidth > 400) {
            this.stick = true;
        } else {
            this.stick = false;
        }
    }*/
}
