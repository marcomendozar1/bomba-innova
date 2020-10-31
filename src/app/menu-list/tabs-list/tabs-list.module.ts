import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsListRoutingModule } from './tabs-list-routing.module';
import { TabsListComponent } from './tabs-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsListRoutingModule
  ],
  declarations: [TabsListComponent]
})
export class TabsListComponentModule { }