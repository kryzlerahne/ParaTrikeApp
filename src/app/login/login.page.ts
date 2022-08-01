import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup
  type: boolean = true;

  private loading;

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  signIn() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/sign-up']);
  }

  login(){

    this.loadingCtrl.create({
      message:'Authenticating...',
      spinner: 'circles',
      cssClass: 'custom-loading'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {

      this.loading.dismiss();

      if(!this.form.valid){
        this.form.markAllAsTouched();
        return;
      }
      this.router.navigate(['/map']);

    }, 4000);

  }

  forgotPassword(){
    console.log('forgot');
  }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }

  changeEye() {
    this.type = !this.type;
  }

}
