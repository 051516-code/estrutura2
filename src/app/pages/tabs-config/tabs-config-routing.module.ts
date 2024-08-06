import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsConfigPage } from './tabs-config.page';

const routes: Routes = [
  {
    path: '',
    component: TabsConfigPage,
    children: [
      {
        path: 'business',
        loadChildren: () => import('../businessSection/business-section.module').then( m => m.BusinessSectionModule)
      },
      {
        path: '',
        redirectTo: 'business',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsConfigPageRoutingModule {}
