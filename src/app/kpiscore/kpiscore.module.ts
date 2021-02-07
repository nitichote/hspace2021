import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiscoreRoutingModule } from './kpiscore-routing.module';
import { KpiHomeComponent } from './kpi-home.component';
import { KpiShowComponent } from './kpi-show.component';


@NgModule({
  declarations: [KpiHomeComponent, KpiShowComponent],
  imports: [
    CommonModule,
    KpiscoreRoutingModule
  ]
})
export class KpiscoreModule { }
