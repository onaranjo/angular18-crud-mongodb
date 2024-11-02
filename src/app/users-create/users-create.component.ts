import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss'
})
export class UsersCreateComponent {

  userForm!: FormGroup;

  constructor(private _userService: UserService){

    this.userForm = new FormGroup({

      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      skill: new FormControl('')
    
    })

  }
  
  sumbit(){
    console.log('kkkkk');
    console.log(this.userForm.value);

    this._userService.createUser(this.userForm.value).subscribe({next:(resp) =>{
      this.userForm.reset();
      alert("Submitted successfuly !!!");
    }, error:(err)=>{
      console.log(err);
    }})
  }

}
