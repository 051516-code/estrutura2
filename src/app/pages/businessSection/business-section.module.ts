import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessConfigPageRoutingModule} from './business-config-routing.module'
import { BusinessListPageModule } from './business-list/business-list.module';
import { BusinessCreatePageModule } from './business-create/business-create.module';
import { BusinessUpdatePageModule } from './business-update/business-update.module';
import { BusinessDetailPageModule } from './business-detail/business-detail.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusinessConfigPageRoutingModule,
    BusinessListPageModule,
    BusinessCreatePageModule,
    BusinessUpdatePageModule,
    BusinessDetailPageModule
  ]
})
export class BusinessSectionModule { }
