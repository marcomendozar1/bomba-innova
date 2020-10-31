import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsBombaRoutingModule } from './tabs-bomba-routing.module';
import { TabsBombaComponent } from './tabs-bomba.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsBombaRoutingModule
  ],
  declarations: [TabsBombaComponent]
})
export class TabsBombaComponentModule { }