import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsConfigPage } from './tabs-config.page';

describe('TabsConfigPage', () => {
  let component: TabsConfigPage;
  let fixture: ComponentFixture<TabsConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
