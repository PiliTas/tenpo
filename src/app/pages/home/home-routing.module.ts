import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'inforegister',
    loadChildren: () => import('../inforegister/inforegister.module').then( m => m.InforegisterPageModule)
  },

  {
    path: 'sesion',
    loadChildren: () => import('../sesion/sesion.module').then( m => m.SesionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
