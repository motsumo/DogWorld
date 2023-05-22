import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded } from './store/breeds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DogWorld';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(appLoaded());
  }
}
