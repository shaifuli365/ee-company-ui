import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {Observable} from 'rxjs';
import {CrudService} from '../../../../shared/services/crud.service';

@Injectable()
export class ThemeLoaderHomeService {

    constructor(private http: HttpClient, private toastrService: ToastrService,
                private router: Router, private route: ActivatedRoute,
                private authService: AuthService, private crudService: CrudService) {}

    getOrgSelectedTheme(orgName: string): Observable<any> {
        return this.crudService.getList({orgName}, '/websiteMenu/getAllMenuListByOrganizationName', false, true);
    }
}