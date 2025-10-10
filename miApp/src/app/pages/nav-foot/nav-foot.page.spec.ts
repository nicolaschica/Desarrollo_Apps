import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavFootPage } from './nav-foot.page';

describe('NavFootPage', () => {
  let component: NavFootPage;
  let fixture: ComponentFixture<NavFootPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
