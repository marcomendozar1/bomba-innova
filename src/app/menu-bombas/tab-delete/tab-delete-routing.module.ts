import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDeleteComponent } from './tab-delete.component';

const routes: Routes = [
  {
    path: '',
    component: TabDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabDeleteRoutingModule { }