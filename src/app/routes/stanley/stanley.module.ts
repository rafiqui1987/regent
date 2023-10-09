import { NgModule } from '@angular/core';

import { StanleyRoutingModule } from './stanley-routing.module';
import { LaneOneComponent } from './lane-one/lane-one.component';
import { SharedModule } from '@shared';

const COMPONENTS: any[] = [LaneOneComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [StanleyRoutingModule, SharedModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class StanleyModule {}
