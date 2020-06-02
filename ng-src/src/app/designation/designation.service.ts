import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation } from './designation';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private url = 'http://localhost:3000/designation';

  getDesignations(): Observable<Designation[]>{
    return this.http.get<Designation[]>(this.url).pipe(catchError(handleError));
  }
  constructor(
    private http: HttpClient
  ) { }
}
