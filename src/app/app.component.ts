import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  wallet() {
    this.router.navigate(['/wallet']);
  }

  home() {
    this.router.navigate(['/map']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
