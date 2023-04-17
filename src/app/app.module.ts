import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BreedsListComponent } from './feature/breeds-list/breeds-list.component';
import { BreedInfoComponent } from './feature/breeds-list/breed-info/breed-info.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    BreedsListComponent,
    BreedInfoComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
