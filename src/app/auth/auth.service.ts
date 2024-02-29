import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5080/login'
  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:5080/users')
  }

  login(params): Observable<any>{
    const crendation = params
    return this.http.post(this.apiUrl,crendation)
  }

}
