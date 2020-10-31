import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsListComponent } from './tabs-list.component';

const routes: Routes = [
  {
    path: 'control',
    component: TabsListComponent,
    children: [
      {
        path: 'central',
        loadChildren: () => import('../tab-central/tab-central.module').then(m => m.TabCentralModule).catch(err => console.log('Oh no!'))
      },
      {
        path: 'log',
        loadChildren: () => import('../tab-log/tab-log.module').then(m => m.TabLogModule).catch(err => console.log('Oh no!'))
      },
      {
        path: 'maps',
        loadChildren: () => import('../tab-maps/tab-maps.module').then(m => m.TabMapsModule).catch(err => console.log('Oh no!'))
      },
      {
        path: '',
        redirectTo: '/control/central',
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
export class TabsListRoutingModule { }