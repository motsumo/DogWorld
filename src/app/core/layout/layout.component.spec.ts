import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a header', () => {
    const el = fixture.debugElement.query(By.css('app-header'));
    expect(el).toBeTruthy();
  });

  it('renders a footer', () => {
    const el = fixture.debugElement.query(By.css('app-footer'));
    expect(el).toBeTruthy();
  });

  it('renders a router', () => {
    const el = fixture.debugElement.query(By.css('router-outlet'));
    expect(el).toBeTruthy();
  });
});
