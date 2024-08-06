import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      {
        path: 'list',
        loadChildren: () => import('./business-list/business-list.module').then( m => m.BusinessListPageModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('./business-update/business-update.module').then( m => m.BusinessUpdatePageModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./business-detail/business-detail.module').then( m => m.BusinessDetailPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./business-create/business-create.module').then( m => m.BusinessCreatePageModule)
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessConfigPageRoutingModule {}
