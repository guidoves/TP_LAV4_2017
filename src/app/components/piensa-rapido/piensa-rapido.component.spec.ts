import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiensaRapidoComponent } from './piensa-rapido.component';

describe('PiensaRapidoComponent', () => {
  let component: PiensaRapidoComponent;
  let fixture: ComponentFixture<PiensaRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiensaRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiensaRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
