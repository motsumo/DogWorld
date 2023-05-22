import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/breed';
import { Store, select } from '@ngrx/store';
import {
  fetchAllBreeds,
  fetchBreedsByPage,
  getCountOfPages,
  selectAllBreedsItems,
  selectBreedsByPage,
} from 'src/app/store/breeds';
import { Observable, of } from 'rxjs';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-breeds-page',
  templateUrl: './breeds-page.component.html',
  styleUrls: ['./breeds-page.component.scss'],
})
export class BreedsPageComponent implements OnInit {
  allBreedsItems$: Observable<Breed[]> = of([]);
  breeds$: Observable<Breed[]> = of([]);
  countOfPages$: Observable<number[]> = of([]);
  page = 0;
  addNewBreedModalLabel = 'Add New Breed';

  constructor(private store: Store) {
    this.store.dispatch(fetchAllBreeds());
  }

  async ngOnInit() {
    this.getAllBreeds();
    this.getBreeds(this.page);
  }

  getAllBreeds() {
    this.allBreedsItems$ = this.store.pipe(select(selectAllBreedsItems));
    this.countOfPages$ = this.store.pipe(select(getCountOfPages));
  }

  async getBreeds(page: number) {
    await this.store.dispatch(fetchBreedsByPage({ page: page }));
    this.breeds$ = this.store.pipe(select(selectBreedsByPage));
  }

  changePage(page: number) {
    this.page = page;
    this.getBreeds(page);
  }
}
