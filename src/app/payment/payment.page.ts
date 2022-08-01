import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  private loading;

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  back() {
      this.router.navigate(['/trip-details']);
  }

  pay(){
    this.loadingCtrl.create({
      message:'Processing payment...',
      spinner: 'circles',
      cssClass: 'custom-loading'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {
      this.loading.dismiss();
      this.router.navigate(['/summary']);
    }, 4000);
  }

  ngOnInit() {
  }

}
