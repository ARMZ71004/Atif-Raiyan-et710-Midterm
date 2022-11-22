import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightslandmarksComponent } from './sightslandmarks.component';

describe('SightslandmarksComponent', () => {
  let component: SightslandmarksComponent;
  let fixture: ComponentFixture<SightslandmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightslandmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightslandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
