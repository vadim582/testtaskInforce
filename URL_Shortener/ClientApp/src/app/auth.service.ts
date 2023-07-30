import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'api/account';

  constructor(private http: HttpClient) { }

  login(loginModel: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginModel);
  }

  register(registerModel: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, registerModel);
  }
}
