import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyCreateVisualPageRoutingModule } from './company-create-visual-routing.module';

import { CompanyCreateVisualPage } from './company-create-visual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCreateVisualPageRoutingModule
  ],
  declarations: [CompanyCreateVisualPage]
})
export class CompanyCreateVisualPageModule {}
