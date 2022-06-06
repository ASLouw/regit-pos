import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleManagerComponent } from './sale-manager.component';

describe('SaleManagerComponent', () => {
  let component: SaleManagerComponent;
  let fixture: ComponentFixture<SaleManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
