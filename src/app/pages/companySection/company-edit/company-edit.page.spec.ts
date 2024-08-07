import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyEditPage } from './company-edit.page';

describe('CompanyEditPage', () => {
  let component: CompanyEditPage;
  let fixture: ComponentFixture<CompanyEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
