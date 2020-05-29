import { Student } from './../models/student';
import { catchError, retry } from 'rxjs/operators';
import { observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  url = 'http://localhost:3000/';
  // registerStudent(student: Student) {
    
  // }

  test() {
    return this.http.get(this.url, {headers: this.headers});
  }
  register(student: Student) {
    return this.http.post(this.url, student);
  }
  constructor(
    private http: HttpClient
  ) { }
}
