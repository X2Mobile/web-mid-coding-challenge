import { Routes } from '@angular/router';
import {FirstChallengeComponent} from './containers/first-challenge/first-challenge.component';
import {SecondChallengeComponent} from './containers/second-challenge/second-challenge.component';
import {ThirdChallengeComponent} from './containers/third-challenge/third-challenge.component';
import {FourthChallengeComponent} from './containers/fourth-challenge/fourth-challenge.component';

export const routes: Routes = [
  {pathMatch: 'full', path: '', redirectTo: 'first'},
  {path: 'first', component: FirstChallengeComponent, title: 'First Challenge'},
  {path: 'second', component: SecondChallengeComponent, title: 'Second Challenge'},
  {path: 'third', component: ThirdChallengeComponent, title: 'Third Challenge'},
  {path: 'fourth', component: FourthChallengeComponent, title: 'Fourth Challenge'},
  {path: '**', redirectTo: 'first'}
];
