import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequiredidPage } from './requiredid.page';

const routes: Routes = [
  {
    path: '',
    component: RequiredidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequiredidPageRoutingModule {}
