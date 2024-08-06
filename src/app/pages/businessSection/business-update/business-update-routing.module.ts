import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessUpdatePage } from './business-update.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessUpdatePageRoutingModule {}
