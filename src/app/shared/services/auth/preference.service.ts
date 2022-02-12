import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Preference {
  selectedOrgId?: number;
  selectedOrgName?: string;
  roleList?: any;
}

@Injectable()
export class PreferenceService {
  preference: Preference;

  constructor(public http: HttpClient) { }

  setPreference(preference: Preference) {
    localStorage.setItem('preference', 'preference');
  }

  removePreference() {
    localStorage.removeItem('preference');
  }

  getPreference(): any {
    if (localStorage.getItem('accessToken')) {
      return localStorage.getItem('accessToken');
    } else {
      return '';
    }
  }

  setSelectedOrgId(selectedOrgId: number) {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      const preference2 = new Preference();
      preference2.selectedOrgId = selectedOrgId;
      localStorage.setItem('preference', JSON.stringify(preference2));
    }else {
      preference.selectedOrgId = selectedOrgId;
      localStorage.setItem('preference', JSON.stringify(preference));
    }
  }

  getSelectedOrgId(): any  {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      return null;
    }else {
      return +preference.selectedOrgId;
    }
  }

  setSelectedOrgName(selectedOrgName: string) {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      const preference2 = new Preference();
      preference2.selectedOrgName = selectedOrgName;
      localStorage.setItem('preference', JSON.stringify(preference2));
    }else{
      preference.selectedOrgName = selectedOrgName;
      localStorage.setItem('preference', JSON.stringify(preference));
    }
  }

  getSelectedOrgName() {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      return null;
    }else {
      return preference.selectedOrgName;
    }
  }

  setRoleList(roleList: any) {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      const preference2 = new Preference();
      preference2.roleList = roleList;
      localStorage.setItem('preference', JSON.stringify(preference2));
    }else{
      preference.roleList = roleList;
      localStorage.setItem('preference', JSON.stringify(preference));
    }
  }

  getRoleList() {
    const preference: Preference = JSON.parse(localStorage.getItem('preference'));
    if (preference == null){
      return null;
    }else {
      return preference.roleList;
    }
  }

}
