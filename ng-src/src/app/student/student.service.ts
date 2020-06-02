import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { catchError } from 'rxjs/operators';
import { handleError } from '../functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:3000/student';
  register(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
