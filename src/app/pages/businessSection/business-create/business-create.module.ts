import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessCreatePageRoutingModule } from './business-create-routing.module';

import { BusinessCreatePage } from './business-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessCreatePageRoutingModule
  ],
  declarations: [BusinessCreatePage]
})
export class BusinessCreatePageModule {}
