import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabLogComponent } from './tab-log.component';

import { TabLogRoutingModule } from './tab-Log-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabLogRoutingModule
  ],
  declarations: [TabLogComponent]
})
export class TabLogModule { }