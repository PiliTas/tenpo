import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InforegisterPage } from './inforegister.page';

const routes: Routes = [
  {
    path: '',
    component: InforegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InforegisterPageRoutingModule {}
