import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Repository } from '../repository';
import { User } from '../user';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  user?: User;
  repository: Repository;
  userName:string;

  constructor(private http:HttpClient) {
    this.repository = new Repository("");
    this.userName = "LewisNjagi"
  }
  
  gitRequest() {
    interface ApiResponse{
      name:string;
      repos_url: string;
      created_at:string;
    }
   
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.userName + "/repos").toPromise().then(response=>{
        this.repository = response

        resolve(response)
      },
      error=>{
        this.repository.name = "Sorry"

        reject(error)
      })
    })
    return promise
  }

}
