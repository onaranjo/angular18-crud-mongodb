import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-update',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-update.component.html',
  styleUrl: './users-update.component.scss'
})
export class UsersUpdateComponent {

  updateUserForm!: FormGroup;
  user:any | undefined;

  constructor(private _userService: UserService, private _actRoute: ActivatedRoute)
  {
    const id = this._actRoute.snapshot.paramMap.get('id');

    if(id){
      this.getUserData(id);
    }
  }

  getUserData(id:any)
  {
    this._userService.getUser(id).subscribe({next:(resp:any) =>{
      console.log(resp);
      this.user = resp.result;

      this.updateUserForm = new FormGroup({

        firstname: new FormControl(this.user.firstname),
        lastname: new FormControl(this.user.lastname),
        email: new FormControl(this.user.email),
        contact: new FormControl(this.user.contact),
        age: new FormControl(this.user.age),
        gender: new FormControl(this.user.gender),
        skill: new FormControl(this.user.skill)
      
      })

    }, error:(err)=>{
      console.log(err);
    }})
  }
  
  sumbit(){

    const id = this._actRoute.snapshot.paramMap.get('id');

    this.updateUserForm.value.id = id;

    this._userService.updateUser(this.updateUserForm.value).subscribe({next:(resp) =>{
      //this.updateUserForm.reset();
      alert("Update successfuly !!!");
    }, error:(err)=>{
      console.log(err);
    }})
  }

}
