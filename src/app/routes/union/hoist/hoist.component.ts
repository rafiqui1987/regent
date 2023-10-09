import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveToComponent } from './move-to/move-to.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

const prefixes1 = ['LRT', 'LRV', 'RRV', 'NG'];
const prefixes2 = ['LRT', 'LRV', 'RRV', 'NG'];

@Component({
  selector: 'app-hoist',
  templateUrl: './hoist.component.html',
  styleUrls: ['./hoist.component.scss'],
})
export class HoistComponent implements OnInit {
  columnNumber1 = 6;
  rowNumber1 = 2;
  columnNames1: string[] = [];
  dataSource1: any[] = [];

  columnNumber2 = 6;
  rowNumber2 = 1;
  columnNames2: string[] = [];
  dataSource2: any[] = [];

  constructor(
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.generateColumnNamesAndRows(1);
    this.generateColumnNamesAndRows(2);
  }

  generateColumnNamesAndRows(tableNumber: number) {
    const columnNumber = tableNumber === 1 ? this.columnNumber1 : this.columnNumber2;
    const rowNumber = tableNumber === 1 ? this.rowNumber1 : this.rowNumber2;
    const columnNames = tableNumber === 1 ? this.columnNames1 : this.columnNames2;
    const dataSource = tableNumber === 1 ? this.dataSource1 : this.dataSource2;
    const prefixes = tableNumber === 1 ? prefixes1 : prefixes2;

    for (let i = 1; i <= columnNumber; i++) {
      const columnName = tableNumber === 1 ? `Pre-Hoist ${i}` : `Hoist ${i}`;
      columnNames.push(columnName);
    }

    for (let i = 0; i < rowNumber; i++) {
      const row: any = {};
      for (let j = 1; j <= columnNumber; j++) {
        const columnName = tableNumber === 1 ? `Pre-Hoist ${j}` : `Hoist ${j}`;
        const generatedValue = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${
          Math.floor(Math.random() * (239874 - 232000 + 1)) + 232000
        }`;
        row[columnName] = generatedValue;
      }
      dataSource.push(row);
    }
  }

  moveTo() {
    this._bottomSheet.open(MoveToComponent);
  }
}
