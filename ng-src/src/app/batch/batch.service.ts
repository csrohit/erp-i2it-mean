import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Batch } from './batch';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private url  = 'http://localhost:3000/batch';
  private headers = new HttpHeaders();


  getBatches(): Observable<Batch[]>{
    return this.http.get<Batch[]>(this.url).pipe(catchError(handleError));
  }
  registerBatch(batch: Batch){
    return this.http.post<Batch>(this.url, batch, { headers: this.headers}).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
