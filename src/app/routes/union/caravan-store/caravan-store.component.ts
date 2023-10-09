import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  chassis: string;
  lane: string;
  bay: string;
  comment: string;
}

@Component({
  selector: 'app-caravan-store',
  templateUrl: './caravan-store.component.html',
  styleUrls: ['./caravan-store.component.scss'],
})
export class CaravanStoreComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  myControl = new FormControl('');
  options: string[] = [
    'LRT238549',
    'LRV233559',
    'RRV230500',
    'NG232529',
    'LRT238949',
    'LRV238835',
    'RRV238043',
    'NG232915',
    'LRT236585',
    'LRV235926',
    'RRV233411',
    'NG236113',
    'LRT231039',
    'LRV235185',
    'RRV231756',
    'NG233603',
    'LRT235883',
    'LRV234895',
    'RRV230703',
    'NG238475',
    'LRT231367',
    'LRV232629',
    'RRV237529',
    'NG237249',
    'LRT235734',
    'LRV239358',
    'RRV237572',
    'NG230485',
    'LRT236206',
    'LRV234553',
    'RRV238541',
    'NG231842',
    'LRT235623',
    'LRV231043',
    'RRV232624',
    'NG239140',
    'LRT233523',
    'LRV230367',
    'RRV237228',
    'NG234652',
    'LRT234691',
    'LRV234006',
    'RRV231132',
    'NG232861',
    'LRT231442',
    'LRV238935',
    'RRV234133',
    'NG233354',
    'LRT238584',
    'LRV232688',
    'RRV233855',
    'NG232208',
    'LRT231415',
    'LRV230966',
    'RRV233571',
    'NG237007',
    'LRT235995',
    'LRV230361',
    'RRV234152',
    'NG237544',
    'LRT239302',
    'LRV230192',
    'RRV236443',
    'NG234207',
    'LRT233552',
    'LRV235941',
    'RRV233053',
    'NG238866',
    'LRT238755',
    'LRV238684',
    'RRV239220',
    'NG238110',
    'LRT234104',
    'LRV238449',
    'RRV234111',
    'NG235184',
    'LRT239413',
    'LRV238879',
    'RRV238202',
    'NG232233',
    'LRT234476',
    'LRV232902',
    'RRV234132',
    'NG233807',
    'LRT239167',
    'LRV238933',
    'RRV235365',
    'NG231326',
    'LRT235952',
    'LRV238261',
    'RRV231811',
  ];

  disableSelect = new FormControl(false);
  selectLane: string;
  selectBay: string;
  lane: string;
  bay: string;
  chassis: string;
  comment: string;

  filteredOptions: string[];
  button = false;
  enter = false;

  displayedColumns: string[] = [
    'Bay',
    'Lane A',
    'Lane B',
    'Lane C',
    'Lane D',
    'Lane F',
    'Lane G',
    'Lane H',
    'Lane I',
  ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    if (filterValue.length > 5) {
      this.button = true;
    }
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  openWelcomeDialog() {
    this.dialog.open(CaravanStoreDialogComponent, {
      // height: '90%'// maxHeight: 600, // Modifica el ancho del cuadro de diálogo según tus necesidades
      // maxWidth: 1200, // Modifica la altura del cuadro de diálogo según tus necesidades
    });
  }

  openStoreDialog() {
    const dialogRef = this.dialog.open(CaravanStoreEnterComponent, {
      data: { lane: this.lane, chassis: this.chassis, bay: this.bay, comment: this.comment },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.chassis = result;
    // });
  }
}

@Component({
  selector: 'caravan-store-dialog',
  templateUrl: 'caravan-store-dialog.html',
})
export class CaravanStoreDialogComponent {}

@Component({
  selector: 'caravan-store-enter',
  templateUrl: 'caravan-store-enter.html',
})
export class CaravanStoreEnterComponent {
  constructor(
    public dialogRef: MatDialogRef<CaravanStoreEnterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openWelcomeDialog() {
    this.dialog.open(CaravanStoreDialogComponent, {});
  }
}

export interface PeriodicElement {
  Bay: number;
  LaneA: string;
  LaneB: string;
  LaneC: string;
  LaneD: string;
  LaneF: string;
  LaneG: string;
  LaneH: string;
  LaneI: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Bay: 1,
    LaneA: 'LRT232835',
    LaneB: 'RRV234168',
    LaneC: 'RRV234169',
    LaneD: 'NG233688',
    LaneF: 'LRT237821',
    LaneG: 'LRV234445',
    LaneH: 'RRV234279',
    LaneI: 'NG238181',
  },
  {
    Bay: 2,
    LaneA: 'LRV234276',
    LaneB: 'RRV237411',
    LaneC: '',
    LaneD: 'LRT236125',
    LaneF: 'LRV233027',
    LaneG: '',
    LaneH: 'NG236294',
    LaneI: 'LRT232657',
  },
  {
    Bay: 3,
    LaneA: 'RRV235521',
    LaneB: 'NG233356',
    LaneC: '',
    LaneD: 'LRV239793',
    LaneF: '',
    LaneG: '',
    LaneH: 'LRT236531',
    LaneI: 'LRV234631',
  },
  {
    Bay: 4,
    LaneA: 'NG236253',
    LaneB: 'LRT236364',
    LaneC: 'LRV239705',
    LaneD: '',
    LaneF: 'NG234434',
    LaneG: 'LRT235035',
    LaneH: 'LRV230989',
    LaneI: 'RRV235798',
  },
  {
    Bay: 5,
    LaneA: '',
    LaneB: 'LRV238451',
    LaneC: 'RRV236576',
    LaneD: 'NG237277',
    LaneF: '',
    LaneG: 'LRV236298',
    LaneH: 'RRV238849',
    LaneI: 'NG236947',
  },
  {
    Bay: 6,
    LaneA: '',
    LaneB: 'RRV233842',
    LaneC: 'NG234240',
    LaneD: 'LRT235949',
    LaneF: 'LRV233714',
    LaneG: 'RRV231154',
    LaneH: 'NG239351',
    LaneI: 'LRT234527',
  },
  {
    Bay: 7,
    LaneA: 'RRV236608',
    LaneB: '',
    LaneC: 'LRT236556',
    LaneD: 'LRV232918',
    LaneF: 'RRV233392',
    LaneG: 'NG237160',
    LaneH: 'LRT238324',
    LaneI: 'LRV235353',
  },
  {
    Bay: 8,
    LaneA: 'NG230882',
    LaneB: 'LRT233020',
    LaneC: '',
    LaneD: 'RRV233338',
    LaneF: 'NG236515',
    LaneG: 'LRT230413',
    LaneH: '',
    LaneI: 'RRV234631',
  },
  {
    Bay: 9,
    LaneA: 'LRT236584',
    LaneB: 'LRV234086',
    LaneC: 'RRV233959',
    LaneD: 'NG239698',
    LaneF: 'LRT236353',
    LaneG: 'LRV238075',
    LaneH: 'RRV236606',
    LaneI: 'NG235931',
  },
  {
    Bay: 10,
    LaneA: 'LRV238220',
    LaneB: 'RRV236742',
    LaneC: 'NG231905',
    LaneD: 'LRT239436',
    LaneF: 'LRV231513',
    LaneG: 'RRV238413',
    LaneH: 'NG234694',
    LaneI: 'LRT234011',
  },
  {
    Bay: 11,
    LaneA: 'RRV236335',
    LaneB: 'NG237349',
    LaneC: 'LRT234316',
    LaneD: 'LRV230419',
    LaneF: 'RRV239033',
    LaneG: 'NG237813',
    LaneH: 'LRT230341',
    LaneI: 'LRV230954',
  },
  {
    Bay: 12,
    LaneA: 'NG237013',
    LaneB: 'LRT238695',
    LaneC: 'LRV232020',
    LaneD: 'RRV239358',
    LaneF: 'NG232910',
    LaneG: 'LRT235240',
    LaneH: 'LRV239969',
    LaneI: 'RRV237570',
  },
  {
    Bay: 13,
    LaneA: 'LRT231137',
    LaneB: 'LRV232103',
    LaneC: 'RRV232151',
    LaneD: 'NG238282',
    LaneF: 'LRT234547',
    LaneG: 'LRV232211',
    LaneH: 'RRV235629',
    LaneI: 'NG235899',
  },
  {
    Bay: 14,
    LaneA: 'LRV239018',
    LaneB: 'RRV233897',
    LaneC: 'NG234254',
    LaneD: 'LRT236173',
    LaneF: 'LRV239691',
    LaneG: 'RRV238358',
    LaneH: 'NG236133',
    LaneI: 'LRT233368',
  },
  {
    Bay: 15,
    LaneA: 'RRV236934',
    LaneB: 'NG232170',
    LaneC: 'LRT231444',
    LaneD: 'LRV232738',
    LaneF: 'RRV230201',
    LaneG: 'NG239106',
    LaneH: 'LRT238290',
    LaneI: 'LRV234873',
  },
  {
    Bay: 16,
    LaneA: 'NG235755',
    LaneB: 'LRT233052',
    LaneC: 'LRV236969',
    LaneD: 'RRV239301',
    LaneF: 'NG239777',
    LaneG: 'LRT235017',
    LaneH: 'LRV236594',
    LaneI: 'RRV237169',
  },
  {
    Bay: 17,
    LaneA: 'LRT235905',
    LaneB: 'LRV238145',
    LaneC: 'RRV235677',
    LaneD: 'NG231848',
    LaneF: 'LRT236404',
    LaneG: 'LRV233131',
    LaneH: 'RRV235820',
    LaneI: 'NG236593',
  },
  {
    Bay: 18,
    LaneA: 'LRV231947',
    LaneB: 'RRV239240',
    LaneC: 'NG233393',
    LaneD: 'LRT238753',
    LaneF: 'LRV237521',
    LaneG: 'RRV232119',
    LaneH: 'NG235578',
    LaneI: 'LRT238264',
  },
];
