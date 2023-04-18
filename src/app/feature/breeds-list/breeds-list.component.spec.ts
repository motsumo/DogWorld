import { TestBed } from '@angular/core/testing';

import { BreedsListComponent } from './breeds-list.component';
import { BreedsService } from 'src/app/shared/services/breeds.service';
import { of } from 'rxjs';
import { breedsListMock } from 'src/mocks/breeds-list-mock';

describe('BreedsListComponent', () => {
  let component: BreedsListComponent;

  beforeEach(async () => {
    const fakeBreedsService = jasmine.createSpyObj<BreedsService>([
      'getAllBreeds',
      'getBreeds',
    ]);
    fakeBreedsService.getBreeds.and.returnValue(of([breedsListMock[0]]));
    fakeBreedsService.getAllBreeds.and.returnValue(of(breedsListMock));

    await TestBed.configureTestingModule({
      providers: [{ provide: BreedsService, useValue: fakeBreedsService }],
    }).compileComponents();

    component = new BreedsListComponent(fakeBreedsService);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have rigth page', () => {
    expect(component.page).toBe(0);
  });

  it('shoud get right allBreeds', () => {
    expect(component.allBreeds.length).toBe(14);
  });

  it('shoud get right breeds', () => {
    expect(component.breeds.length).toBe(1);
  });

  it('shoud get right countOfPages', () => {
    expect(component.countOfPages.length).toBe(2);
  });

  it('shoud change the page', () => {
    component.changePage(2);

    expect(component.page).toBe(2);
  });
});
