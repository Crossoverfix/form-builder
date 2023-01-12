import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbSettingsComponent } from './fb-settings.component';

describe('FbSettingsComponent', () => {
  let component: FbSettingsComponent;
  let fixture: ComponentFixture<FbSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
