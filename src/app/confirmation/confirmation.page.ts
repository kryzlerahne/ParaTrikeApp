import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage {

  @ViewChild(IonModal) modal: IonModal;

  constructor(private router: Router) { }

  complete() {
      this.router.navigate(['/map']);
  }

  cancel() {
      this.router.navigate(['/cancellation']);
      this.modal.dismiss();
  }

}
