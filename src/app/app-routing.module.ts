import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaComponentModule) },
  { path: '', loadChildren: () => import('./home-admin/home-admin.module').then(m => m.HomeAdminComponentModule) },
  { path: '', loadChildren: () => import('./menu-users/tabs-user/tabs-user.module').then(m => m.TabsUserComponentModule) },
  { path: '', loadChildren: () => import('./menu-list/tabs-list/tabs-list.module').then(m => m.TabsListComponentModule) },
  { path: '', loadChildren: () => import('./menu-bombas/tabs-bombas/tabs-bomba.module').then(m => m.TabsBombaComponentModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
