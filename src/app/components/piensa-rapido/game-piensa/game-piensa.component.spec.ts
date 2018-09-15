import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePiensaComponent } from './game-piensa.component';

describe('GamePiensaComponent', () => {
  let component: GamePiensaComponent;
  let fixture: ComponentFixture<GamePiensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePiensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePiensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
