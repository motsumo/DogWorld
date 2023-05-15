import { Breed } from 'src/app/shared/interfaces/breed';

export interface BreedsState {
  breeds: Breed[];
}

export const initialState: BreedsState = {
  breeds: [],
};
