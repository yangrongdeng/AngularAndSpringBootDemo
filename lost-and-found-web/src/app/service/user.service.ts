import {Injectable} from '@angular/core';
import qs from 'qs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteUserUrl = 'http://localhost:8888/login/deleteUser?_allow_anonymous=true';


  /**
   * 删除用户
   */
  deleteUser(id: number) {
    return this.http.get(
      this.deleteUserUrl + '&id=' + id);
  }


  constructor(private http: HttpClient) {
  }
}
