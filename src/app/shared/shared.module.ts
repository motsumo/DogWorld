import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [ModalWindowComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [ModalWindowComponent, PaginationComponent],
})
export class SharedModule {}
