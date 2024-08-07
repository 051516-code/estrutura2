import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyCreatePageRoutingModule } from './company-create-routing.module';

import { CompanyCreatePage } from './company-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCreatePageRoutingModule
  ],
  declarations: [CompanyCreatePage]
})
export class CompanyCreatePageModule {}
