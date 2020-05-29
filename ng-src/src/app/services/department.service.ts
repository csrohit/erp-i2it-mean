import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  url = 'http://localhost:3000/';


  getDepartments() {
    return this.http.get(this.url + 'department');
  }
  constructor(
    private http: HttpClient
  ) { }
}
