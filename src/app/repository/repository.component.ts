import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../github-http/github-request.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository?: Repository;

  constructor(private gitService:GithubRequestService) {

  }

  ngOnInit(): void {
    // this.gitService.gitRequest()
    this.repository = this.gitService.repository
  }

}
