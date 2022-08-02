import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registration-account',
  templateUrl: './registration-account.page.html',
  styleUrls: ['./registration-account.page.scss'],
})
export class RegistrationAccountPage implements OnInit {

  type: boolean = true;
  type2: boolean = true;

  private loading;

  get username() {
    return this.accountForm.get('username');
  }

  get password() {
    return this.accountForm.get('password');
  }

  get retypePw() {
    return this.accountForm.get('retypePw');
  }

  public errorMessages = {
    username: [
      { type: 'required', message: 'Username is required' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password should be minimum of 8 characters' }
    ],
    retypePw: [
      { type: 'required', message: 'Please retype your password' },
      { type: 'minlength', message: 'Password should be minimum of 8 characters' }
    ]
  };

  accountForm = this.formBuilder.group({
    username : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(8)]],
    retypePw : ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  public submit() {

    this.loadingCtrl.create({
      message:'Processing your account...',
      spinner: 'circles',
      cssClass: 'custom-loading'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {

      this.loading.dismiss();

      if(!this.accountForm.valid){
        this.accountForm.markAllAsTouched();
        return;
      }
      this.router.navigate(['/login']);

    }, 4000);

  }

  changeEye() {
    this.type = !this.type;
  }

  changeEye2() {
    this.type2 = !this.type2;
  }

}
