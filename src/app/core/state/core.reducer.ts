import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as BreedsReducer from './breeds/breeds.reducer';

export const reducers: ActionReducerMap<State> = {
  breeds: BreedsReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
