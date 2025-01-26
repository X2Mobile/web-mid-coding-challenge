import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChallengeComponent } from './third-challenge.component';

describe('ThirdChallengeComponent', () => {
  let component: ThirdChallengeComponent;
  let fixture: ComponentFixture<ThirdChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
