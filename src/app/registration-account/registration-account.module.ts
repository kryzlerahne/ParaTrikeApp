import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationAccountPageRoutingModule } from './registration-account-routing.module';

import { RegistrationAccountPage } from './registration-account.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrationAccountPageRoutingModule
  ],
  declarations: [RegistrationAccountPage]
})
export class RegistrationAccountPageModule {}
