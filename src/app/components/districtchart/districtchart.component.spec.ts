import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictchartComponent } from './districtchart.component';

describe('DistrictchartComponent', () => {
  let component: DistrictchartComponent;
  let fixture: ComponentFixture<DistrictchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
