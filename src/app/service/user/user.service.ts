import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
url='http://localhost:3000/users';
  users() {
    return this.http.get(this.url);
  }
  postData(data:any) {
    return this.http.post(this.url,data)
  }
}
