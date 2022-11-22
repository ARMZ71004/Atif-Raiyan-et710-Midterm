import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfComponent } from './contactinf.component';

describe('ContactinfComponent', () => {
  let component: ContactinfComponent;
  let fixture: ComponentFixture<ContactinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactinfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
