import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // constructor() { }

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }

  getUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/api/get-podcasts`);
  }

  getUserById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: string, user: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
