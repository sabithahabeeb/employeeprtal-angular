import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-users.list',
  templateUrl: './users.list.component.html',
  styleUrls: ['./users.list.component.css']
})
export class UsersListComponent implements OnInit {
  allUsers:UserModel[]=[]
  constructor(private api:UserapiService){}

  ngOnInit(): void {
    this.getallusers()
  }

  getallusers(){
    console.log("Inside all users");
    this.api.getAllUserAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allUsers=res
      },
      error:(err:any)=>{
        alert(err.message)
      }
    })
    
  }

removeUser(id:any){
  this.api.deleteUserAPI(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert("User Removed succesfully")
      this.getallusers()
      
    },
    error:(err:any)=>{
      alert(err.message)
    }
  })
}

}
