import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningComponent } from './morning.component';

describe('MorningComponent', () => {
  let component: MorningComponent;
  let fixture: ComponentFixture<MorningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
