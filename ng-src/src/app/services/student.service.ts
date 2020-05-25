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
  registerStudent(student: Student) {
    
  }

  test() {
    return this.http.get('http://localhost:3000/', {headers: this.headers});
  }
  constructor(
    private http: HttpClient
  ) { }
}
