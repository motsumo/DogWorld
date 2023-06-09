import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsPageComponent } from './breeds-page.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { AddNewBreedFormComponent } from './add-new-breed-form/add-new-breed-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    BreedsPageComponent,
    BreedInfoComponent,
    BreedsListComponent,
    AddNewBreedFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    NgxSpinnerModule,
    ComponentsModule,
  ],
  exports: [BreedsPageComponent],
})
export class BreedsPageModule {}
