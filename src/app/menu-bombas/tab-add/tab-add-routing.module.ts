import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAddComponent } from './tab-add.component';

const routes: Routes = [
  {
    path: '',
    component: TabAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAddRoutingModule { }