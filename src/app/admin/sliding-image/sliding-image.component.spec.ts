import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImageComponent } from './sliding-image.component';

describe('SlidingImageComponent', () => {
  let component: SlidingImageComponent;
  let fixture: ComponentFixture<SlidingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
