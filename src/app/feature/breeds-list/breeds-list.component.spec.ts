import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsListComponent } from './breeds-list.component';
import { BreedsService } from 'src/app/shared/services/breeds.service';
import { breedsListMock } from 'src/mocks/breeds-list-mock';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BreedsListComponent', () => {
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;
  let fakeBreedsService: BreedsService;

  beforeEach(async () => {
    fakeBreedsService = jasmine.createSpyObj<BreedsService>('BreedsService', {
      getBreeds: of([breedsListMock[0]]),
      getAllBreeds: of(breedsListMock),
    });

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BreedsListComponent],
      providers: [{ provide: BreedsService, useValue: fakeBreedsService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a BreedInfoComponent', () => {
    const el = fixture.debugElement.query(By.css('app-breed-info'));
    expect(el).toBeTruthy();
  });
});
