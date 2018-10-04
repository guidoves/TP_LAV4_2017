import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalesComponent } from './globales.component';

describe('GlobalesComponent', () => {
  let component: GlobalesComponent;
  let fixture: ComponentFixture<GlobalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
