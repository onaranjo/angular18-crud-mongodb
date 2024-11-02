import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  userlist:any | undefined;

  constructor(private _user: UserService){
    this.getData();
  }

  getData(){
    return this._user.getUsersList().subscribe({next:(resp:any) =>{
      console.log(resp);
      this.userlist = resp.result;
    }, error:(err)=>{
      console.log(err);
    }})
  }

}
