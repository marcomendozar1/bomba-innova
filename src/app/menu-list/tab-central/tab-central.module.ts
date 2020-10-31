import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCentralComponent } from './tab-central.component';
import { DatePipe } from '@angular/common';

import { TabCentralRoutingModule } from './tab-central-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabCentralRoutingModule
  ],
  declarations: [TabCentralComponent]
  , providers: [DatePipe]
})
export class TabCentralModule { }