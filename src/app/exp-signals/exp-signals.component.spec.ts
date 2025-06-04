import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSignalsComponent } from './exp-signals.component';

describe('ExpSignalsComponent', () => {
  let component: ExpSignalsComponent;
  let fixture: ComponentFixture<ExpSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
