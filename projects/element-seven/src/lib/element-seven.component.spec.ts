import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSevenComponent } from './element-seven.component';

describe('ElementSevenComponent', () => {
  let component: ElementSevenComponent;
  let fixture: ComponentFixture<ElementSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
