import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancellationPageRoutingModule } from './cancellation-routing.module';

import { CancellationPage } from './cancellation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancellationPageRoutingModule
  ],
  declarations: [CancellationPage]
})
export class CancellationPageModule {}
