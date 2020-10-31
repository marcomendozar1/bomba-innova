import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsUserComponent } from './tabs-user.component';
import { TabsUserRoutingModule } from './tabs-user-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsUserRoutingModule
  ],
  declarations: [TabsUserComponent]
})
export class TabsUserComponentModule { }