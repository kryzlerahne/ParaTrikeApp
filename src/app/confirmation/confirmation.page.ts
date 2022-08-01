import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage {

  private loading;

  @ViewChild(IonModal) modal: IonModal;

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  complete() {
      this.router.navigate(['/map']);
  }

  cancel() {

    this.loadingCtrl.create({
      message:'Processing Request...',
      spinner: 'circles',
      cssClass: 'custom-loading'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {
      this.loading.dismiss();
      this.router.navigate(['/cancellation']);
      this.modal.dismiss();
    }, 4000);
  }

}
