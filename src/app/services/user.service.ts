import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //urlBase = "http://localhost:3000/api/";
  urlBase = "https://angular18-crud-mongodb-backend.onrender.com/api/";

  constructor(private http: HttpClient) { }

  getUsersList(){
    return this.http.get(this.urlBase + "user");
  }

  getUser(id: any){
    return this.http.get(this.urlBase + "user/"+id);
  }

  createUser(data:any){
    return this.http.post(this.urlBase + "user", data);
  }

  updateUser(data:any){
    return this.http.put(this.urlBase + "user", data);
  }

  deleteUser(id: any){
    return this.http.delete(this.urlBase + "user/"+id);
  }
}
