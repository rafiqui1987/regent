import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { UnionRoutingModule } from './union-routing.module';
import { CaravanStoreComponent } from './caravan-store/caravan-store.component';
import { CaravanStoreDialogComponent } from './caravan-store/caravan-store.component';
import { CaravanStoreEnterComponent } from './caravan-store/caravan-store.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScheduleComponent } from './schedule/schedule.component';
import { HoistComponent } from './hoist/hoist.component';
import { MoveToComponent } from './hoist/move-to/move-to.component';

const COMPONENTS: any[] = [
  CaravanStoreComponent,
  CaravanStoreDialogComponent,
  CaravanStoreEnterComponent,
  ScheduleComponent,
  HoistComponent,
  MoveToComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [UnionRoutingModule, SharedModule, PdfViewerModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, MoveToComponent],
})
export class UnionModule {}
