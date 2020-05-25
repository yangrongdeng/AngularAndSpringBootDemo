import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import qs from 'qs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  loginUrl = 'http://localhost:8888/login/check';

  login(data = {})
{
  return this.http.get(this.loginUrl + '?' + qs.stringify(data)).toPromise();
}



}

