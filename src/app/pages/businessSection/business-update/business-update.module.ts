import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessUpdatePageRoutingModule } from './business-update-routing.module';

import { BusinessUpdatePage } from './business-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessUpdatePageRoutingModule
  ],
  declarations: [BusinessUpdatePage]
})
export class BusinessUpdatePageModule {}
