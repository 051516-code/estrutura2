import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessCreatePage } from './business-create.page';

describe('BusinessCreatePage', () => {
  let component: BusinessCreatePage;
  let fixture: ComponentFixture<BusinessCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
