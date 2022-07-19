import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapHomePageRoutingModule } from './map-home-routing.module';

import { MapHomePage } from './map-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapHomePageRoutingModule
  ],
  declarations: [MapHomePage]
})
export class MapHomePageModule {}
