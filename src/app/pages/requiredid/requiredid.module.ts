import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequiredidPageRoutingModule } from './requiredid-routing.module';

import { RequiredidPage } from './requiredid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequiredidPageRoutingModule
  ],
  declarations: [RequiredidPage]
})
export class RequiredidPageModule {}
