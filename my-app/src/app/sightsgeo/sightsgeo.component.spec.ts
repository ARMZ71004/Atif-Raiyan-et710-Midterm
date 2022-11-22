import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsgeoComponent } from './sightsgeo.component';

describe('SightsgeoComponent', () => {
  let component: SightsgeoComponent;
  let fixture: ComponentFixture<SightsgeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsgeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightsgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
