import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HoverTextDirective} from '../../directives/hover-text.directive';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, HoverTextDirective],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  routes = [
    { name: 'First Challenge', path: 'first' },
    { name: 'Second Challenge', path: 'second' },
    { name: 'Third Challenge', path: 'third' },
    { name: 'Fourth Challenge', path: 'fourth' }
  ];
}
