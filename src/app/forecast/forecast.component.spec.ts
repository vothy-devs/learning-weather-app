import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ForecastComponent]
    });
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
