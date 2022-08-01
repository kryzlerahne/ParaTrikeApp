import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup
  type: boolean = true;

  constructor(private router: Router) { }

  signIn() {
    this.router.navigate(['/login']);
  }

  register(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(['/registration']);
  }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(9), Validators.maxLength(9)]
        })
    });
  }
}
