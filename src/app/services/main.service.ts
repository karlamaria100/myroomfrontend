import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {Observable} from 'rxjs';

@Injectable()
export class MainService {

  headers: any;

  constructor(private _http: HttpClient, public shared: SharedService) { }

  setHeaders() {
    this.headers = {
      'Content-Type':'application/json',
      'platformID': '1013'
    };
  }

  login(email: string, pass: string) : Observable<any> {
    this.setHeaders();
    return this._http.post<any>(this.shared.url+"/user/login",{email:email, password:pass}, {headers: this.headers, observe: 'response', withCredentials:true});
  }
}
