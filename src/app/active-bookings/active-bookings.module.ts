import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveBookingsPageRoutingModule } from './active-bookings-routing.module';

import { ActiveBookingsPage } from './active-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveBookingsPageRoutingModule
  ],
  declarations: [ActiveBookingsPage]
})
export class ActiveBookingsPageModule {}
