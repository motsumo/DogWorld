import { Component, OnInit } from '@angular/core';
import { Breed } from '../interfaces/breed';
import { BreedsService } from '../services/breeds.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  providers: [BreedsService],
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent implements OnInit {
  breeds: Breed[] = [];

  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    this.getBreeds();
  }

  getBreeds(): void {
    this.breedsService.getBreeds().subscribe(breeds => (this.breeds = breeds));
  }
}
