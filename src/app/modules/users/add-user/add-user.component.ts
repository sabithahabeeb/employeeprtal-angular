import { Component } from '@angular/core';
import { UserModel } from '../users.model';
import { UserapiService } from '../userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UserModel = {}
  constructor(private api:UserapiService,private router:Router){}
  addUser(){
    console.log(this.user);
    this.api.addUserAPI(this.user).subscribe({
      next:(res:UserModel)=>{
        console.log(res);
        alert("New user Added successfully!!")
        this.router.navigateByUrl('/users')
        
      },
      error:(err:any)=>{
        alert(err.message)
      }
    })
    
  }
  cancel(){
    this.user={}
  }
}
