import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosAngelesComponentComponent } from './los-angeles-component.component';

describe('LosAngelesComponentComponent', () => {
  let component: LosAngelesComponentComponent;
  let fixture: ComponentFixture<LosAngelesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosAngelesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosAngelesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
