import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalWindowComponent, PaginationComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ModalWindowComponent, PaginationComponent, InputComponent],
})
export class ComponentsModule {}
