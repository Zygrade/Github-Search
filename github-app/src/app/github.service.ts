import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'Zygrade';
  private client_id = '6284d3605ae07ea93bc5';
  private client_secret = 'd33c028c6705dc5e170856d0f5902f373beb9bca';

  constructor(private http:Http) {
      console.log('Github Service Init...');
  }

  getUser(){
      return this.http.get('https://api.github.com/users/'+this.username)
      .map(res => res.json());
  }

  getRepos(){
      return this.http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  updateUsername(username:string){
      this.username = username;
  }

}
