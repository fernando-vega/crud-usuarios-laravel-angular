import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_ENDPOINT = 'http://localhost:8000/api'

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/users')
  }

  save(user: User){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.httpClient.post(this.API_ENDPOINT + '/users', user, {headers: headers} )
  }

  put(user){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.httpClient.put(this.API_ENDPOINT + '/users/'+ user.id, user, {headers: headers} )
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/users/' + id)
  }
}
