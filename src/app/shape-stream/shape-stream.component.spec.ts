import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeStreamComponent } from './shape-stream.component';

describe('ShapeStreamComponent', () => {
  let component: ShapeStreamComponent;
  let fixture: ComponentFixture<ShapeStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
