import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  values: (string | null)[];
  checked: boolean[];
}

const min = 231456;
const max = 239874;
const prefixes = ['LRT', 'LRV', 'RRV', 'NG'];

const ELEMENT_DATA: PeriodicElement[] = Array.from({ length: 10 }, (_, i) => {
  return {
    position: i + 1,
    values: Array.from({ length: 9 }, () =>
      Math.random() < 0.3
        ? null
        : prefixes[Math.floor(Math.random() * prefixes.length)] +
          (Math.floor(Math.random() * (max - min + 1)) + min)
    ),
    checked: Array.from({ length: 9 }, () => false),
  };
});

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  displayedColumns: string[] = [
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
  tableColumns = ['position', ...this.displayedColumns];

  submit() {
    const selectedValues: (string | null)[] = [];
    this.dataSource.forEach(row => {
      row.checked.forEach((checked, index) => {
        if (checked) {
          selectedValues.push(row.values[index]);
          row.values[index] = null; // o algún valor predeterminado
          row.checked[index] = false;
        }
      });
    });
    console.log(selectedValues);
  }
}
