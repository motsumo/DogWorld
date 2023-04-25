import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBreedFormComponent } from './add-new-breed-form.component';

describe('AddNewBreedFormComponent', () => {
  let component: AddNewBreedFormComponent;
  let fixture: ComponentFixture<AddNewBreedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewBreedFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewBreedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
