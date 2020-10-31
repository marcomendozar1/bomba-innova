import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabMapsComponent } from './tab-maps.component';

const routes: Routes = [
  {
    path: '',
    component: TabMapsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabMapsRoutingModule { }