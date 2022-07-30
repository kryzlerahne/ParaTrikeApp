import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(private router: Router) { }

  back() {
      this.router.navigate(['/payment']);
  }

  done() {
      this.router.navigate(['/confirmation']);
  }

  ngOnInit() {
  }

}
