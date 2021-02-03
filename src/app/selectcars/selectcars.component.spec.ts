import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcarsComponent } from './selectcars.component';

describe('SelectcarsComponent', () => {
  let component: SelectcarsComponent;
  let fixture: ComponentFixture<SelectcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
