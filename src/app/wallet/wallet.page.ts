import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  features: any[] = [
    {id: 1, name: 'Recharge', src: 'assets/top-up.png', background: 'rgba(255, 196, 9, 0.1)'},
    {id: 2, name: 'Withdraw', src: 'assets/withdraw.png', background: 'rgba(255, 196, 9, 0.1)'},
    {id: 3, name: 'Send', src: 'assets/send.png', background: 'rgba(255, 196, 9, 0.1)'},
    {id: 4, name: 'Pay', src: 'assets/payment.png', background: 'rgba(255, 196, 9, 0.1)'},
    {id: 5, name: 'QR Code', src: 'assets/qr-code.png', background: 'rgba(255, 196, 9, 0.1)'},
    {id: 6, name: 'Transactions', src: 'assets/transaction.png', background: 'rgba(255, 196, 9, 0.1)'},
  ];

  transactions: any[] = [
    {id: 1, action: 'Received from Palawan Express', refCode: '0000012', amount: 1500, date: '07/22/22',time: '3:00PM'},
    {id: 2, action: 'Send to Mang Tomas', refCode: '0000013', amount: -1200,  date:' 07/22/22', time: '4:00PM'},
    {id: 3, action: 'Send to Vienna Sausage', refCode: '0000014', amount: -1500,  date: '07/23/22', time: '5:30AM'},
    {id: 4, action: 'Received from 711 Cliqq', refCode: '0000023', amount: 15000,  date: '07/23/22', time: '12:35NN'},
    {id: 5, action: 'Send to Jolly Canola', refCode: '0000053', amount: -1100,  date: '07/24/22', time: '5:30AM'},

  ];

  private loading;

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  recharge(){

    this.loadingCtrl.create({
      message:'Connecting to third party mobile wallet apps...',
      spinner: 'circles',
      cssClass: 'custom-loading'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {

      this.loading.dismiss();
      this.router.navigate(['/wallet']);

    }, 4000);

  }


  ngOnInit() {
  }

}
