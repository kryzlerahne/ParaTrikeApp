import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Map';
  Pages = [
   {
     title: 'Home',
     url: '/map',
     icon: 'home'
   },
   {
     title: 'Wallet',
     url: '/wallet',
     icon: 'wallet'
   },
   {
     title: 'History',
     url: '/history',
     icon: 'refresh'
   },
   {
     title: 'Active Bookings',
     url: '/active',
     icon: 'alarm'
   },
   {
     title: 'Logout',
     url: '/login',
     icon: 'log-out'
   }
 ];

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
