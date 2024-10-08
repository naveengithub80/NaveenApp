import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowattendanceComponent } from './showattendance.component';

describe('ShowattendanceComponent', () => {
  let component: ShowattendanceComponent;
  let fixture: ComponentFixture<ShowattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
