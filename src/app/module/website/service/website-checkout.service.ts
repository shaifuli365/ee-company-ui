import {Injectable} from '@angular/core';
import {CrudService} from '../../../shared/services/crud.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {indexInList, isInList} from '../../../common/util/single-collection-util';


@Injectable()
export class WebsiteCheckoutService {

  constructor(private http: HttpClient, private toastrService: ToastrService) {}


}
