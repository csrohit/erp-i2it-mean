import { catchError } from 'rxjs/operators';
import { Designation } from './../interfaces/designation';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { handleError } from './functions';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  private url = 'http://localhost:3000/';
  getDesignations(): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.url + 'designation', {headers: this.headers}).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
