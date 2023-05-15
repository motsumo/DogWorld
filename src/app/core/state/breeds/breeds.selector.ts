import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreedsState } from './breeds.state';
import { Breed } from 'src/app/shared/interfaces/breed';

export const selectBreeds = createFeatureSelector<BreedsState>('breeds');

export const selectBreedsItems = createSelector(
  selectBreeds,
  (state: BreedsState) => state.breeds
);

export const selectBreed = (props: { id: Breed['id'] }) =>
  createSelector(selectBreeds, breedsItems =>
    breedsItems.find((breed: Breed) => breed.id === props.id)
  );
