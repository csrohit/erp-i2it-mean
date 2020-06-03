import { Subject } from 'src/app/subject/subject';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  private url = 'http://localhost:3000/subject';
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url, {headers: this.headers}).pipe(catchError(handleError));
  }
  constructor(
    private http: HttpClient
  ) { }
}
