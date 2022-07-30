import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.page.html',
  styleUrls: ['./cancellation.page.scss'],
})
export class CancellationPage implements OnInit {

  constructor(private router: Router) { }

  close() {
      this.router.navigate(['/map']);
  }

  ngOnInit() {
  }

}
