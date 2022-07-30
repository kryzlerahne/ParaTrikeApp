import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancellationPage } from './cancellation.page';

const routes: Routes = [
  {
    path: '',
    component: CancellationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancellationPageRoutingModule {}
