import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  getUsersList(){
    return this.http.get(this.urlBase + "user");
  }
}
