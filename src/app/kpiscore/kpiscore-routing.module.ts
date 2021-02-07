import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HosviewComponent } from './hosview.component';
import { KpiHomeComponent } from './kpi-home.component';
import { KpiShowComponent } from './kpi-show.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
     component:KpiHomeComponent,
     children: [
      { path: '', redirectTo: 'show', pathMatch: 'full' },
      { path: 'hosview', component: HosviewComponent },
      {
      path: 'show',
     component:KpiShowComponent
    }
    ]
    },
   
  ]
},
{
  path: '**',
  redirectTo: '/home'
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpiscoreRoutingModule { }
