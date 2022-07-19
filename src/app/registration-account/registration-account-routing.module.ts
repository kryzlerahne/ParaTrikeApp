import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationAccountPage } from './registration-account.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationAccountPageRoutingModule {}
