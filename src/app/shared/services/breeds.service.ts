import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Breed } from '../interfaces/breed';
import { CONSTANTS } from '../constants';

@Injectable({ providedIn: 'root' })
export class BreedsService {
  constructor(private http: HttpClient) {}

  /** GET breeds from the server */
  getBreeds(page: number): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${CONSTANTS.API_URL}/breeds?limit=12&page=${page}`
    );
  }

  getAllBreeds(): Observable<Breed[]> {
    return this.http.get<[]>(`${CONSTANTS.API_URL}/breeds`);
  }
}
