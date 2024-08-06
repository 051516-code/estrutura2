import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aio',
    pathMatch: 'full'
  },
  {
    path: 'aio',
    loadChildren: () => import('./pages/tabs-config/tabs-config.module').then( m => m.TabsConfigPageModule)
  },
  {
    path: '**',
    redirectTo: 'aio'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
