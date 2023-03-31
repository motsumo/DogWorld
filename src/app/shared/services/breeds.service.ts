import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Breed } from '../interfaces/breed';
import { CONSTANTS } from '../constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': CONSTANTS.API_KEY,
  }),
};

@Injectable()
export class BreedsService {
  breedsUrl = `${CONSTANTS.API_URL}/breeds?limit=10&page=0`; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET breeds from the server */
  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.breedsUrl);
  }
}
