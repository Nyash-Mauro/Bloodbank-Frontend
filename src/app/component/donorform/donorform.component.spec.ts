import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorformComponent } from './donorform.component';

describe('DonorformComponent', () => {
  let component: DonorformComponent;
  let fixture: ComponentFixture<DonorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
