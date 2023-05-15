import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/breed';
import { BreedsService } from 'src/app/shared/services/breeds.service';
import { Store } from '@ngrx/store';
import { selectBreedsItems } from 'src/app/core/state/breeds';

@Component({
  selector: 'app-breeds-page',
  templateUrl: './breeds-page.component.html',
  styleUrls: ['./breeds-page.component.scss'],
})
export class BreedsPageComponent implements OnInit {
  breeds: Breed[] = [];
  allBreeds: Breed[] = [];
  countOfPages: number[] = [];
  page = 0;
  addNewBreedModalLabel = 'Add New Breed';

  constructor(private breedsService: BreedsService, private store: Store) {}

  breedsItems$ = this.store.select(selectBreedsItems);

  ngOnInit() {
    this.getBreeds(this.page);
    this.getAllBreeds();
  }

  getBreeds(page: number): void {
    this.breedsService
      .getBreeds(page)
      .subscribe(breeds => (this.breeds = breeds));
  }

  getAllBreeds(): void {
    this.breedsService.getAllBreeds().subscribe(breeds => {
      this.allBreeds = breeds;
      this.countOfPages = Array(Math.ceil(breeds.length / 12))
        .fill(0)
        .map((x, i) => i);
    });
  }

  changePage(page: number) {
    this.page = page;
    this.getBreeds(page);
  }
}
