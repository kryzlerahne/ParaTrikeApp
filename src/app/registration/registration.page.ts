import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get mobileNum() {
    return this.registrationForm.get('mobileNum');
  }

  public errorMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    mobileNum: [
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'pattern', message: 'Please enter a valid mobile number' },
    ]
  };

  registrationForm = this.formBuilder.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email : ['', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9•-]+.[a-zA-Z]{2,4}$')
  ]],
    mobileNum : ['', [Validators.required,
    Validators.pattern('^[+]*[(]{0,1}[0,9]{1,4}[)]{0,1}[-s./0-9]*$'),
    Validators.minLength(11)
    ]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  public submit() {
    if(!this.registrationForm.valid){
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/registration-account']);
  }

  ngOnInit() {
  }
}
