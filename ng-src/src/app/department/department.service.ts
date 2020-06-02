import { catchError } from 'rxjs/operators';
import { Department } from './department';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  private url = 'http://localhost:3000/department';

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url, {headers: this.headers}).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
