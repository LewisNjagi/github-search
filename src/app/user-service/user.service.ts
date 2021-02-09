import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile: User;
  repo: Repository;
  userName: string;

  constructor(private http: HttpClient) {
    this.profile = new User("");
    this.repo = new Repository("");
    this.userName = "LewisNjagi";
  }
  getUser() {
    interface ApiResponse{
      login:string;
      avatar_url:string;
      public_repos:number;
      followers: number;
      following: number
    }
    let headers = new HttpHeaders({'Authorization':'token'})
    let options = {headers:headers}
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" +  environment.apiKey).toPromise().then(response=>{
        this.profile = response

        resolve(response)
      },
      error=>{
        // this.profile = "error"

        reject(error)
      })
    })
    return promise
  }
  
  userRequest(UserName:any) {
    interface ApiResponse {
      login: string;
      public_repos?:number,
      avatar_url?: string,
      followers?: number,
      following?: number
    }
    let headers = new HttpHeaders({'Authorization':'token'})
    let options = {headers:headers}
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + UserName + "?access_token=" +  environment.apiKey).toPromise().then(response=>{
        this.profile = response;
        // this.profile.public_repos = response.public_repos
      })
    })
    return promise
  }
  repoRequest(UserName:any) {
    interface ApiResponse {
      name: string,
      description:string,
      created_at:string
    }
    let headers = new HttpHeaders({'Authorization':'token 81d785f37cbccb7ddbbb407055a0c756f0f13398'})
    let options = {headers:headers}
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + UserName + "/repos?access_token=" +  environment.apiKey).toPromise().then(response=>{
        this.repo = response;
        // this.profile.public_repos = response.public_repos
      })
    })
    return promise
  }
}
