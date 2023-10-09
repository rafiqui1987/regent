import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CaravanStoreDialogComponent } from 'app/routes/union/caravan-store/caravan-store.component';

@Component({
  selector: 'app-lane-one',
  templateUrl: './lane-one.component.html',
  styleUrls: ['./lane-one.component.scss'],
})
export class LaneOneComponent {
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = ['number','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA2);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openWelcomeDialog() {
    this.dialog.open(CaravanStoreDialogComponent, {
      // height: '90%'// maxHeight: 600, // Modifica el ancho del cuadro de diálogo según tus necesidades
      // maxWidth: 1200, // Modifica la altura del cuadro de diálogo según tus necesidades
    });
  }
}

export interface PeriodicElement2 {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  number: number;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {number: 1, position: 'LRT235348', name:'06/10/23 14:39',weight: 'waiting', symbol: 'some comment'},
  {number: 2, position: 'LRT238841', name:'05/10/23 09:51',weight: 'done', symbol: 'first comment'},
  {number: 3, position: 'LRT236096', name:'04/10/23 08:07',weight: 'in progress', symbol: 'other comment'},
  {number: 4, position: 'LRT236233', name:'03/10/23 08:45',weight: 'waiting', symbol: 'some comment'},
  {number: 5, position: 'LRT233352', name:'16/09/23 13:48',weight: 'in progress', symbol: 'other comment'},
  {number: 6, position: 'LRT232441', name:'09/10/23 16:03',weight: 'waiting', symbol: 'some comment'},
  {number: 7, position: 'LRT230210', name:'08/10/23 09:36',weight: 'done', symbol: 'first comment'},
  {number: 8, position: 'LRT239276', name:'07/10/23 13:04',weight: 'in progress', symbol: 'other comment'},
  {number: 9, position: 'LRT233528', name:'16/09/23 15:38',weight: 'in progress', symbol: 'other comment'},
  {number: 10, position: 'LRT238339', name:'09/10/23 12:29',weight: 'waiting', symbol: 'some comment'},
  {number: 11, position: 'LRT231678', name:'08/10/23 12:47',weight: 'done', symbol: 'first comment'},
  {number: 12, position: 'LRT230624', name:'00/01/00 00:00',weight: 'in progress', symbol: 'other comment'},
  {number: 13, position: 'LRT231638', name:'02/10/23 14:56',weight: 'done', symbol: 'first comment'},
  {number: 14, position: 'LRT238944', name:'01/10/23 08:19',weight: 'in progress', symbol: 'other comment'},
  {number: 15, position: 'LRT237525', name:'30/09/23 08:00',weight: 'waiting', symbol: 'some comment'},
  {number: 16, position: 'LRT236954', name:'29/09/23 13:32',weight: 'done', symbol: 'first comment'},
  {number: 17, position: 'LRT236282', name:'06/10/23 13:15',weight: 'waiting', symbol: 'some comment'},
  {number: 18, position: 'LRT231633', name:'05/10/23 10:15',weight: 'done', symbol: 'first comment'},


];
