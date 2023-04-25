import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/breed';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent {
  @Input() countOfPages: number[] = [];
  @Input() activePage = 0;
  @Input() breeds: Breed[] = [];

  @Output() changePageEvent = new EventEmitter<number>();

  changePage(activePage: number) {
    this.changePageEvent.emit(activePage);
  }
}
