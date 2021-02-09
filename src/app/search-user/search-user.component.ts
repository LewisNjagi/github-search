import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  repository:any;
  user?:any;
  UserName?:string

  constructor(private userService:UserService) { }

  getuser1() {
    this.userService.userRequest(this.UserName);
    
    this.user = this.userService.profile;
    console.log(this.repository)
  }
  getrepo() {
    this.repository = this.userService.repo;
    this.userService.repoRequest(this.UserName);
  }
  userRequest(UserName:any){
    this.userService.userRequest(UserName).then(
      (success)=>{
       this.user = this.userService.profile.login
       
     })
  }
  repoRequest(UserName:any){
    this.userService.repoRequest(UserName).then(
      (success)=>{
        this.repository = this.userService.repo
      })
  }
  ngOnInit(): void {
  }

}
