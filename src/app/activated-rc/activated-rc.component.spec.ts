import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRcComponent } from './activated-rc.component';

describe('ActivatedRcComponent', () => {
  let component: ActivatedRcComponent;
  let fixture: ComponentFixture<ActivatedRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
