import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabUpdateComponent } from './tab-update.component';

import { TabUpdateRoutingModule } from './tab-update-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabUpdateRoutingModule
  ],
  declarations: [TabUpdateComponent]
})
export class TabUpdateModule { }