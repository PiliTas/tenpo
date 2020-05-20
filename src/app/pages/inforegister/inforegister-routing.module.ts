import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InforegisterPage } from './inforegister.page';

const routes: Routes = [
  {
    path: '',
    component: InforegisterPage
  },
  {
    path: 'requiredid',
    loadChildren: () => import('../requiredid/requiredid.module').then( m => m.RequiredidPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InforegisterPageRoutingModule {}
