import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMapsComponent } from './tab-maps.component';

import { TabMapsRoutingModule } from './tab-maps-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabMapsRoutingModule
  ],
  declarations: [TabMapsComponent]
})
export class TabMapsModule { }