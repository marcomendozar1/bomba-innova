import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsUserComponent } from './tabs-user.component';

const routes: Routes = [
  {
    path: 'admin-user',
    component: TabsUserComponent,
    children: [
      {
        path: 'add',
        loadChildren: () => import('../tab-add/tab-add.module').then(m => m.TabAddModule).catch(err => console.log('Oh no!'))
      },
      {
        path: 'delete',
        loadChildren: () => import('../tab-delete/tab-delete.module').then(m => m.TabDeleteModule).catch(err => console.log('Oh no!'))
      },
      {
        path: 'update',
        loadChildren: () => import('../tab-update/tab-update.module').then(m => m.TabUpdateModule).catch(err => console.log('Oh no!'))
      },
      {
        path: '',
        redirectTo: '/admin-user/add',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsUserRoutingModule { }