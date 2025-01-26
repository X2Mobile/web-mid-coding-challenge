import {Component, OnInit} from '@angular/core';
import {DescriptionComponent} from '../../components/description/description.component';
import {interval, tap} from 'rxjs';

@Component({
  selector: 'app-third-challenge',
  imports: [
    DescriptionComponent
  ],
  templateUrl: './third-challenge.component.html',
  styleUrl: './third-challenge.component.scss'
})
export class ThirdChallengeComponent implements OnInit {
  isJumping = true;
  counter = 0;

  ngOnInit() {
    interval(1000).pipe(
      tap((value) => {
        this.counter = value;
        this.isJumping = true;
      }),
    ).subscribe();

  }

  stop() {
    this.isJumping = false;
  }
}
