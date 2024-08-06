import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessCreatePage } from './business-create.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessCreatePageRoutingModule {}
