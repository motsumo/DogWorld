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
      ofType(BreedsActions.fetchAllBreeds),
      switchMap(() =>
        this.apiService.getAllBreeds().pipe(
          map(allBreeds =>
            BreedsActions.fetchBreedSuccess({ allBreeds: allBreeds })
          ),
          catchError(error =>
            of(BreedsActions.fetchBreedFailed({ error: error }))
          )
        )
      )
    )
  );

  fetchBreedsByPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActions.fetchBreedsByPage),
      switchMap((action: any) =>
        this.apiService.getBreeds(action.page).pipe(
          map(breeds =>
            BreedsActions.fetchBreedsByPageSuccess({ breeds: breeds })
          ),
          catchError(error =>
            of(BreedsActions.fetchBreedsByPageFailed({ error: error }))
          )
        )
      )
    )
  );
}
