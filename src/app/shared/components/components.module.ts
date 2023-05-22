import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ModalWindowComponent,
    PaginationComponent,
    InputComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ModalWindowComponent,
    PaginationComponent,
    LoaderComponent,
    InputComponent,
  ],
})
export class ComponentsModule {}
