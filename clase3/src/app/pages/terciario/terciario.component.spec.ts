import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerciarioComponent } from './terciario.component';

describe('TerciarioComponent', () => {
  let component: TerciarioComponent;
  let fixture: ComponentFixture<TerciarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerciarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerciarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
