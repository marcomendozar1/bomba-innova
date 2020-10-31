import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCentralComponent } from './tab-central.component';

const routes: Routes = [
  {
    path: '',
    component: TabCentralComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabCentralRoutingModule { }