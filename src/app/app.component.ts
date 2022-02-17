import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-dark bg-dark">
    <div class='card-header'><a class="navbar-brand">{{pageTitle}}</a></div>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome' >Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Acme product info";
}
