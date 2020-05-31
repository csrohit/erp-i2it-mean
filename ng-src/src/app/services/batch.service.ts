import { catchError } from 'rxjs/operators';
import { Batch } from './../interfaces/batch';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { handleError } from './functions';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  private url = 'http://localhost:3000/';
  constructor(
    private http: HttpClient
  ) { }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.url + 'batch', {headers: this.headers}).pipe(catchError(handleError));
  }
}
