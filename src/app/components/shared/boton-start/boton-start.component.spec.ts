import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonStartComponent } from './boton-start.component';

describe('BotonStartComponent', () => {
  let component: BotonStartComponent;
  let fixture: ComponentFixture<BotonStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
