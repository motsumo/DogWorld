import { Component, OnInit } from '@angular/core';
import { Breed } from '../../shared/interfaces/breed';
import { BreedsService } from '../../shared/services/breeds.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  providers: [BreedsService],
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent implements OnInit {
  breeds: Breed[] = [];
  allBreeds: Breed[] = [];
  countOfPages: number[] = [];
  page = 0;

  constructor(private breedsService: BreedsService) {}

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
