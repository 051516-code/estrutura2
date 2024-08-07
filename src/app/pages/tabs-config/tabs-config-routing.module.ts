import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsConfigPage } from './tabs-config.page';

const routes: Routes = [
  {
    path: '',
    component: TabsConfigPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path : 'company',
        loadChildren: () => import('../companySection/company.module').then( m => m.CompanyModule)
      },
      {
        path: '',
        redirectTo: 'company',
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
