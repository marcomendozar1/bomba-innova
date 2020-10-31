import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLogComponent } from './tab-log.component';

const routes: Routes = [
  {
    path: '',
    component: TabLogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabLogRoutingModule { }