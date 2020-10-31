import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabDeleteComponent } from './tab-delete.component';

import { TabDeleteRoutingModule } from './tab-delete-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabDeleteRoutingModule
  ],
  declarations: [TabDeleteComponent]
})
export class TabDeleteModule { }