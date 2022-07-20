import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-account',
  templateUrl: './registration-account.page.html',
  styleUrls: ['./registration-account.page.scss'],
})
export class RegistrationAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['/map']);
  }

}
