import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidmainComponent } from './covidmain.component';

describe('CovidmainComponent', () => {
  let component: CovidmainComponent;
  let fixture: ComponentFixture<CovidmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
