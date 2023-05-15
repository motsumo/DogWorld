import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreedsState } from './breeds.state';

export const selectBreeds = createFeatureSelector<BreedsState>('breeds');
export const selectAllBreeds = createFeatureSelector<BreedsState>('allBreeds');

export const selectAllBreedsItems = createSelector(
  selectAllBreeds,
  (state: BreedsState) => state.allBreeds
);

export const selectBreedsByPage = createSelector(
  selectBreeds,
  (state: BreedsState) => state.breeds
);

export const getCountOfPages = createSelector(
  selectAllBreeds,
  (state: BreedsState) =>
    Array(Math.ceil(state.allBreeds.length / 12))
      .fill(0)
      .map((x, i) => i)
);
