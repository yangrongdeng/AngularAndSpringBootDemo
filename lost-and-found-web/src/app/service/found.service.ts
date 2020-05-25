import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoundService {
  foundPublishUrl = 'http://localhost:8888/found/publish?_allow_anonymous=true';

  foundPublish(data = {}) {
    return this.http.post(this.foundPublishUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).toPromise();
  }






  constructor( private http: HttpClient) { }
}
