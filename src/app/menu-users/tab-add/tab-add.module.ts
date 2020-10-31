import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabAddComponent } from './tab-add.component';
import { TabAddRoutingModule } from './tab-add-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabAddRoutingModule
  ],
  declarations: [TabAddComponent]
})
export class TabAddModule { }