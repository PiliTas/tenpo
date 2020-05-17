import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InforegisterPageRoutingModule } from './inforegister-routing.module';

import { InforegisterPage } from './inforegister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InforegisterPageRoutingModule
  ],
  declarations: [InforegisterPage]
})
export class InforegisterPageModule {}
