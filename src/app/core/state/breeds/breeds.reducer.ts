import { Action, createReducer, on } from '@ngrx/store';
import * as breedsActions from './breeds.actions';
import { initialState, BreedsState } from './breeds.state';

const BreedsReducer = createReducer(
  initialState,
  on(breedsActions.fetchBreedSuccess, (state, { breeds }) => ({
    ...state,
    breeds: breeds,
  })),
  on(breedsActions.editBreedItemSuccess, (state, { breed }) => {
    const breedIndex = state.breeds.findIndex(item => item.id === breed.id);
    const updatedbreeds = [...state.breeds];
    updatedbreeds[breedIndex] = breed;
    return {
      ...state,
      breeds: updatedbreeds,
    };
  }),
  on(breedsActions.deleteBreedItemSuccess, (state, { breedId }) => {
    const breedIndex = state.breeds.findIndex(item => item.id === breedId);
    const updatedbreeds = [...state.breeds];
    updatedbreeds.splice(breedIndex, 1);
    return {
      ...state,
      breeds: updatedbreeds,
    };
  })
);

export function reducer(state: BreedsState | undefined, action: Action) {
  return BreedsReducer(state, action);
}
