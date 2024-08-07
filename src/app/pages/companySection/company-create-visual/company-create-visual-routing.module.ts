import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCreateVisualPage } from './company-create-visual.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCreateVisualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCreateVisualPageRoutingModule {}
