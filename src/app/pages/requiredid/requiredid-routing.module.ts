import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequiredidPage } from './requiredid.page';

const routes: Routes = [
  {
    path: '',
    component: RequiredidPage
  },
   {
    path: 'register',
    loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequiredidPageRoutingModule {}
