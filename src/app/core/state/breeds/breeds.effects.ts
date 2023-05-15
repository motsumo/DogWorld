import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as BreedsActions from './breeds.actions';
import { BreedsService } from 'src/app/shared/services/breeds.service';

@Injectable()
export class BreedsEffects {
  constructor(
    private actions$: Actions<any>,
    private apiService: BreedsService
  ) {}

  fetchBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActions.appLoaded.type, BreedsActions.addBreedItemSuccess),
      switchMap(() =>
        this.apiService.getAllBreeds().pipe(
          map(breeds => BreedsActions.fetchBreedSuccess({ breeds: breeds })),
          catchError(error =>
            of(BreedsActions.fetchBreedFailed({ error: error }))
          )
        )
      )
    )
  );
}
