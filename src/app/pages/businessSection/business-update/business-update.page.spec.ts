import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessUpdatePage } from './business-update.page';

describe('BusinessUpdatePage', () => {
  let component: BusinessUpdatePage;
  let fixture: ComponentFixture<BusinessUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
