import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});

  getDesignations() {
    return this.http.get('http://localhost:3000/designation');
  }
  constructor(
    private http: HttpClient
  ) { }
}
