import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GithubRequestService } from '../github-http/github-request.service';
import { UserService } from '../user-service/user.service';
import { profile } from 'console';
import { User } from '../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  repository:any;
  user?:any;
  UserName?:string
  // profile?:User;

  constructor(private userService:UserService, private gitService:GithubRequestService) { 
    this.gitService.gitRequest().then(repos =>{
      this.repository = repos;
    });
    this.userService.getUser().then(users =>{
      console.log(users)
      this.user = users;
    })
  }
  // getuser1() {
  //   this.userService.userRequest(this.UserName);
  //   this.user = this.userService.profile
  //   console.log(this.user)
  // }
  //   userRequest(UserName:any){
  //     this.userService.userRequest(UserName).then(
  //       (success)=>{
  //        this.user = this.userService.profile.login
         
  //      })
  //   }
 
  
    // performSearch(searchTerm:any) {
    //   this.userService.userRequest(searchTerm).then((success:any)=>{
    //   this.user = this.gitService.user
    //   })
    // }
    // this.userService.UserRequest(searchTerm).then((success:any)=>{
    //   console.log(success)
    //   this.user = this.userService.profile
    // })

    ngOnInit(): void {
      // this.userRequest("LewisNjagi")
    }
  
}
