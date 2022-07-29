import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private router: Router) { }

  back() {
      this.router.navigate(['/trip-details']);
  }

  pay(){
    this.router.navigate(['/confirmation']);
  }

  ngOnInit() {
  }

}
