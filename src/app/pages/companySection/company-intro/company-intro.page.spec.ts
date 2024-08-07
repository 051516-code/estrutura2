import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyIntroPage } from './company-intro.page';

describe('CompanyIntroPage', () => {
  let component: CompanyIntroPage;
  let fixture: ComponentFixture<CompanyIntroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
