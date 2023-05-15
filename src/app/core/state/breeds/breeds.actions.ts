import { createAction, props } from '@ngrx/store';
import { Breed } from 'src/app/shared/interfaces/breed';

export const appLoaded = createAction('[App] App Loaded');

export const fetchAllBreeds = createAction('[Breed API] Fetch Breeds');

export const fetchBreedSuccess = createAction(
  '[Breed API] Fetch Breed Success',
  props<{ allBreeds: Breed[] }>()
);

export const fetchBreedFailed = createAction(
  '[Breed API] Fetch Breed Failed',
  props<{ error: any }>()
);

export const fetchBreedsByPage = createAction(
  '[Breed API] Fetch Breed By Page ',
  props<{ page: number }>()
);

export const fetchBreedsByPageSuccess = createAction(
  '[Breed API] Fetch Breed By Page Success',
  props<{ breeds: Breed[] }>()
);

export const fetchBreedsByPageFailed = createAction(
  '[Breed API] Fetch Breed By Page Failed',
  props<{ error: any }>()
);

export const addBreedItemFormSubmitted = createAction(
  '[Add Breed] Add Breed Form Submitted',
  props<{ breed: Breed }>()
);

export const addBreedItemSuccess = createAction(
  '[Breed API] Add Breed Item Success'
);

export const addBreedItemFailed = createAction(
  '[Breed API] Add Breed Item Failed',
  props<{ error: any }>()
);

export const editBreedItemFormSubmitted = createAction(
  '[Edit Breed Page] Edit Breed Form Submitted',
  props<{ breed: Breed }>()
);

export const editBreedItemSuccess = createAction(
  '[Breed API] Edit Breed Item Success',
  props<{ breed: Breed }>()
);

export const editBreedItemFailed = createAction(
  '[Breed API] Edit MenBreedu Item Failed',
  props<{ error: any }>()
);

export const deleteBreedItemInitiated = createAction(
  '[Delete Breed Page] Delete Breed Initiated',
  props<{ breedId: Breed['id'] }>()
);

export const deleteBreedItemSuccess = createAction(
  '[Breed API] Delete Breed Item Success',
  props<{ breedId: Breed['id'] }>()
);

export const deleteBreedItemFailed = createAction(
  '[Breed API] Delete Breed Item Failed',
  props<{ error: any }>()
);
