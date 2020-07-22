import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
  <h1>{{getTitle()}}</h1>
  </div><div>
  My first component</div>
  <pm-products></pm-products>`,
  //templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Acme Product Managemenst';
  getTitle(): string {return this.pageTitle;}
}
