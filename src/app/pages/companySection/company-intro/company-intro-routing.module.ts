import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyIntroPage } from './company-intro.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyIntroPageRoutingModule {}
