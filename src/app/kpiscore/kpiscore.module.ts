import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiscoreRoutingModule } from './kpiscore-routing.module';
import { KpiHomeComponent } from './kpi-home.component';
import { KpiShowComponent } from './kpi-show.component';
import { HosviewComponent } from './hosview.component';


@NgModule({
  declarations: [KpiHomeComponent, KpiShowComponent, HosviewComponent],
  imports: [
    CommonModule,
    KpiscoreRoutingModule
  ]
})
export class KpiscoreModule { }
