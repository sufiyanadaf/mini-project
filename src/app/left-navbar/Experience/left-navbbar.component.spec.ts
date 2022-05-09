import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavbbarComponent } from './left-navbbar.component';

describe('LeftNavbbarComponent', () => {
  let component: LeftNavbbarComponent;
  let fixture: ComponentFixture<LeftNavbbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavbbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavbbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
