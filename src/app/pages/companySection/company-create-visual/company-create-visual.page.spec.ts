import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCreateVisualPage } from './company-create-visual.page';

describe('CompanyCreateVisualPage', () => {
  let component: CompanyCreateVisualPage;
  let fixture: ComponentFixture<CompanyCreateVisualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateVisualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
