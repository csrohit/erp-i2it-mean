import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutor } from './tutor';
import { catchError } from 'rxjs/operators';
import { handleError } from '../functions';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private url = 'http://localhost:3000/tutor';
  private headers = new HttpHeaders();

  getTutors():Observable<Tutor[]>{
    return this.http.get<Tutor[]>(this.url).pipe(catchError(handleError));
  }

  registerTutor(tutor: Tutor): Observable<Tutor>{
    return this.http.post<Tutor>(this.url, tutor, {headers: this.headers}).pipe(catchError(handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
