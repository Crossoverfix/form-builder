import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbOrderItemComponent } from './fb-order-item.component';

describe('FbOrderItemComponent', () => {
  let component: FbOrderItemComponent;
  let fixture: ComponentFixture<FbOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbOrderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
