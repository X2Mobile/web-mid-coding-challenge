import { Component } from '@angular/core';
import {DescriptionComponent} from '../../components/description/description.component';

@Component({
  selector: 'app-second-challenge',
  imports: [
    DescriptionComponent
  ],
  templateUrl: './second-challenge.component.html',
  styleUrl: './second-challenge.component.scss'
})
export class SecondChallengeComponent {
  condition = false;

  toggle() {
    this.condition = !this.condition;
  }

}
