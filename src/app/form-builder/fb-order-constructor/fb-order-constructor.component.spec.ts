import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbOrderConstructorComponent } from './fb-order-constructor.component';

describe('FbOrderConstructorComponent', () => {
  let component: FbOrderConstructorComponent;
  let fixture: ComponentFixture<FbOrderConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbOrderConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbOrderConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
