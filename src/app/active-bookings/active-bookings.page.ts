import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-bookings',
  templateUrl: './active-bookings.page.html',
  styleUrls: ['./active-bookings.page.scss'],
})
export class ActiveBookingsPage {

  @ViewChild(IonModal) modal: IonModal;

  constructor(private router: Router) { }

}
