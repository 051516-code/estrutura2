import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCreatePage } from './company-create.page';

describe('CompanyCreatePage', () => {
  let component: CompanyCreatePage;
  let fixture: ComponentFixture<CompanyCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
