import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChallengeComponent } from './first-challenge.component';

describe('FirstChallengeComponent', () => {
  let component: FirstChallengeComponent;
  let fixture: ComponentFixture<FirstChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
