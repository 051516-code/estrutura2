import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyIntroPageRoutingModule } from './company-intro-routing.module';

import { CompanyIntroPage } from './company-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyIntroPageRoutingModule
  ],
  declarations: [CompanyIntroPage]
})
export class CompanyIntroPageModule {}
