import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BreedsPageModule } from './feature/breeds-page/breeds-page.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core/state';
import { EffectsModule } from '@ngrx/effects';
import { BreedsEffects } from './core/state/breeds';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    BreedsPageModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([BreedsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
