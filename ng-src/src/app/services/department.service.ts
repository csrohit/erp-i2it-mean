import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  url = 'http://localhost:3000/';


  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + 'department').pipe(
      catchError(this.handleError)
    );

  }
  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side network error occured.
      console.error('Error occurred: ', error.error.message);
      return throwError(error.error.message);
    } else {
      // The backend return with unsuccessful status code
      if (error.status === 0) {
        console.error('Connection Error occurred: ', error.message);
        return throwError(error.statusText);
      }
      console.error(`Backend return with status code ${error.status} and the body was: ${error.error}`);
      return throwError(error.error);
    }
  }

}


interface Department {
  _id: string;
  title: string;
}

