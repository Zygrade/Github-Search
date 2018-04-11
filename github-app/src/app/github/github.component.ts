import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers : [GithubService]
})
export class GithubComponent implements OnInit {

  user : any;
  repos : any;
  username : string;

  constructor(private githubService:GithubService) {
      console.log('Github Component Init...');
  }

  ngOnInit() {
  }

  search(){
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user_object => {
        this.user = user_object;
    });

    this.githubService.getRepos().subscribe(repos_object => {
        this.repos = repos_object;
    });
  }
}
