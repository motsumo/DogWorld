import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() countOfPages: number[] = [];
  @Input() activePage = 0;

  @Output() changePageEvent = new EventEmitter<number>();

  changePage(page: number) {
    this.changePageEvent.emit(page);
  }
}
