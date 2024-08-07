import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('./company-create/company-create.module').then( m => m.CompanyCreatePageModule)
  },
 
  {
    path: 'list',
    loadChildren: () => import('./company-list/company-list.module').then( m => m.CompanyListPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./company-intro/company-intro.module').then( m => m.CompanyIntroPageModule)
  },
  {
    path: 'create-visual',
    loadChildren: () => import('./company-create-visual/company-create-visual.module').then( m => m.CompanyCreateVisualPageModule)
  },
  {
    path: 'company-view/:id',
    loadChildren: () => import('./company-view/company-view.module').then( m => m.CompanyViewPageModule)
  },
  {
    path: 'company-edit/:id',
    loadChildren: () => import('./company-edit/company-edit.module').then( m => m.CompanyEditPageModule)
  },
  
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
