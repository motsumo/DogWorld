import { Breed } from 'src/app/shared/interfaces/breed';

export interface BreedsState {
  allBreeds: Breed[];
  breeds: Breed[];
}

export const initialState: BreedsState = {
  allBreeds: [],
  breeds: [],
};
