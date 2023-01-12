import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemsComponent } from './fb-items.component';

describe('FbItemsComponent', () => {
  let component: FbItemsComponent;
  let fixture: ComponentFixture<FbItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
