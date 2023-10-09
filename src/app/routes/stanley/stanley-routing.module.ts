import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaneOneComponent } from './lane-one/lane-one.component';

const routes: Routes = [{ path: 'lane-one', component: LaneOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanleyRoutingModule {}
