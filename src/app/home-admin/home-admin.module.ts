import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeAdminComponent } from './home-admin.component';
import { AdminComponentModule } from '../admin/admin.module';
import { HomeAdminRoutingModule } from './home-admin-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminComponentModule,
    HomeAdminRoutingModule
  ],
  declarations: [HomeAdminComponent]
})
export class HomeAdminComponentModule { }