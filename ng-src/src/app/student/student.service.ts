import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { catchError } from 'rxjs/operators';
import { handleError } from '../functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:3000/student/';
  private headers = new HttpHeaders();

  register(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student).pipe(catchError(handleError));
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.url + id, {headers: this.headers}).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
