import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabUpdateComponent } from './tab-update.component';

const routes: Routes = [
  {
    path: '',
    component: TabUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabUpdateRoutingModule { }