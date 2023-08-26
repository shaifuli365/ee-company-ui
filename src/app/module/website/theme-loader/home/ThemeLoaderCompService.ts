import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../common/model/api-response";
import {apiUriLocation} from "../../../../common/model/api-uri-location";
import {ApiService} from "../../../../common/service/api.service";

@Injectable({ providedIn: 'root'})
export class ThemeLoaderCompService {

  constructor(private apiService: ApiService) { }

  public getThemeNameForOrg(domainName:string):Observable<any>{
    return this.apiService.postV2<ApiResponse<any>>( `${apiUriLocation.api1}`, {domainName:domainName});
  }

}
