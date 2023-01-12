import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbConstructorComponent } from './fb-constructor.component';

describe('FbConstructorComponent', () => {
  let component: FbConstructorComponent;
  let fixture: ComponentFixture<FbConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
