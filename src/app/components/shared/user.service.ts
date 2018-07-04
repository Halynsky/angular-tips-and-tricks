import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URLSearchParams } from '@angular/http';
import { HttpClient, } from '@angular/common/http';

export class User {
  id: string;
}

@Injectable()
export class UserServiceOld {

  constructor(private http: Http) {}

  getUser(id: string): Observable<User> {
    return this.http
      .get(`api/users/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAll(ageFrom, ageTo): Observable<User[]> {

    let headers = new Headers();
    headers.append('Authorization', 'secret');

    let params = new URLSearchParams();
    params.set('ageFrom', ageFrom.toString());
    params.set('ageTo', ageTo.toString());

    let options = new RequestOptions();
    options.params = params;
    options.headers = headers;

    return this.http
      .get(`api/users`, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`api/users/${id}`)
  }

  getAll(ageFrom, ageTo): Observable<User[]> {
    const headers = { 'Authorization': 'secret' };
    const params = { 'ageFrom': ageFrom, 'ageTo': ageTo };
    return this.http.get<User[]>('/api/users', { headers, params });
  }


}
