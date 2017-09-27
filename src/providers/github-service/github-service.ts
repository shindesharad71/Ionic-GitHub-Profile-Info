import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interrface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = 'https://api.github.com/users';
  private reposUrl: string = 'repos';

  constructor(private http: Http) {}

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .map((data: Response) => data.json()
    );
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .map((data: Response) => data.json());
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

}
