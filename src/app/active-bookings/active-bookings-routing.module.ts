import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveBookingsPage } from './active-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveBookingsPageRoutingModule {}
