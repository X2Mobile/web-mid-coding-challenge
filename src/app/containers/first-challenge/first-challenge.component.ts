import { Component } from '@angular/core';
import {DescriptionComponent} from '../../components/description/description.component';

@Component({
  selector: 'app-first-challenge',
  imports: [
    DescriptionComponent
  ],
  templateUrl: './first-challenge.component.html',
  styleUrl: './first-challenge.component.scss'
})
export class FirstChallengeComponent {

}
