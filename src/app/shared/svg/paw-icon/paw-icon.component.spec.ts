import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawIconComponent } from './paw-icon.component';

describe('PawIconComponent', () => {
  let component: PawIconComponent;
  let fixture: ComponentFixture<PawIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PawIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PawIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
