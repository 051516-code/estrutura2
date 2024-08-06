import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsConfigPageRoutingModule } from './tabs-config-routing.module';

import { TabsConfigPage } from './tabs-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsConfigPageRoutingModule
  ],
  declarations: [TabsConfigPage]
})
export class TabsConfigPageModule {}
