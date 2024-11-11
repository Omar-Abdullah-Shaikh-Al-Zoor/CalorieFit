import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiationPageComponent } from './initiation-page.component';

describe('InitiationPageComponent', () => {
  let component: InitiationPageComponent;
  let fixture: ComponentFixture<InitiationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
