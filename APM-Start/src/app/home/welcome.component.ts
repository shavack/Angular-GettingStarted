import { Component } from '@angular/core';

@Component({
  selector: 'pm-welcome',
  template: '<div><h1>{{pageTitle}}</h1><div>dupaosiem</div><div>',
  //templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';
}
