import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { HoistComponent } from '../hoist.component';

@Component({
  selector: 'app-move-to',
  templateUrl: './move-to.component.html',
  styles: [],
})
export class MoveToComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<HoistComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
