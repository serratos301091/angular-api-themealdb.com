import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishPageDetailComponent } from './dish-page-detail.component';

describe('DishPageDetailComponent', () => {
  let component: DishPageDetailComponent;
  let fixture: ComponentFixture<DishPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
