import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CuentaComponent } from './cuenta.component';
import { AdminComponentModule } from '../admin/admin.module';
import { CuentaRoutingModule } from './cuenta-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminComponentModule,
    CuentaRoutingModule
  ],
  declarations: [CuentaComponent]
})
export class CuentaComponentModule { }