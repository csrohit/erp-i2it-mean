import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Batch } from './batch';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private url  = 'http://localhost:3000/batch';


  getBatches(): Observable<Batch[]>{
    return this.http.get<Batch[]>(this.url).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
