import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {Observable} from 'rxjs';
import {RequestOptions} from '@angular/http';

@Injectable()
export class MainService {

  headers: any;
  private options;

  constructor(private _http: HttpClient, public shared: SharedService) { }

  setHeaders() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('jwttoken', localStorage.getItem('Auth'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  login(email: string, pass: string) : Observable<any> {
    this.setHeaders();
    return this._http.post<any>(this.shared.url+"/user/login",{email:email, password:pass}, {headers: this.headers, observe: 'response', withCredentials:true});
  }

  getAllYouNeed() {
    this.setHeaders();
    return this._http.get<any>(this.shared.url+"/user/getAllYouNeed" ,{headers: this.headers, observe: 'response', withCredentials:true});

  }
}
