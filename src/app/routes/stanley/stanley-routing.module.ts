import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaneOneComponent } from './lane-one/lane-one.component';
import { ChecklistComponent } from './checklist/checklist.component';

const routes: Routes = [
  { path: 'lane-one', component: LaneOneComponent },
  { path: 'checklist', component: ChecklistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanleyRoutingModule {}
