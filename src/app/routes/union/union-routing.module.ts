import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaravanStoreComponent } from './caravan-store/caravan-store.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HoistComponent } from './hoist/hoist.component';

const routes: Routes = [
  { path: 'caravan-store', component: CaravanStoreComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'hoist', component: HoistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnionRoutingModule {}
