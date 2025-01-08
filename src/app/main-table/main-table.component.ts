import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  date: Date,
  color:string
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Akash', date: new Date('2025-01-01'), symbol: 'H' },
//   { position: 2, name: 'Akash', date: new Date('2025-01-02'), symbol: 'He' },
//   { position: 3, name: 'Faizan', date: new Date('2025-01-03'), symbol: 'Li' },
//   { position: 4, name: 'Faizan', date: new Date('2025-01-04'), symbol: 'Be' },
//   { position: 5, name: 'Faizan', date: new Date('2025-01-05'), symbol: 'B' },
//   { position: 6, name: 'Rahul', date: new Date('2025-01-06'), symbol: 'C' },
//   { position: 7, name: 'Rahul', date: new Date('2025-01-07'), symbol: 'N' },
//   { position: 8, name: 'Rahul', date: new Date('2025-01-08'), symbol: 'O' },
//   { position: 9, name: 'Akash', date: new Date('2025-01-09'), symbol: 'F' },
//   { position: 10, name: 'Akash', date: new Date('2025-01-10'), symbol: 'Ne' },
// ];

@Component({
  selector: 'app-main-table',
  standalone: false,
  
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.css'
})
export class MainTableComponent {
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['name', 'date'];
  





  ngOnInit(): void {
    // Generate data for the entire month
    this.generateMonthData();
  }

  // Generate data for the entire month
  generateMonthData() {
    const namesMap = {
      Akash: [1, 2, 3, 10, 11, 12, 19, 20, 21,31],  // Akash on days 1-3, 10-12, 19-21, 28-30
      Rahul: [4, 5, 6, 13, 14, 15, 22, 23, 24, 29,30],    // Rahul on days 4-6, 13-15, 22-24, 31
      Faizan: [7, 8, 9, 16, 17, 18, 25, 26, 27,28]         // Faizan on days 7-9, 16-18, 25-27
    };

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Get the current month (0-based index)

    const data: PeriodicElement[] = [];
    // const day = currentDate.getDay();
    const day = currentDate.getDate();
    console.log(day)
    // Generate data for all days of the current month (1 to 31)
    for (let i = day; i <= 31; i++) {
      const date = new Date(currentDate.getFullYear(), currentMonth, i); // Set the date for the current month

      let name = '';
      let color = '';

      // Check which name corresponds to the current day
      if (namesMap.Akash.includes(i)) {
        name = 'Akash';
        color = '#6B69D6'; // Red
      } else if (namesMap.Rahul.includes(i)) {
        name = 'Rahul';
        color = 'rgb(105, 104, 170)'; // Blue
      } else if (namesMap.Faizan.includes(i)) {
        name = 'Faizan';
        color = '#8764B8'; // Yellow
      }

      // Add the data to the table
      data.push({
        position: i,
        name,
        date,
        color
      });
    }

    // Set the data for the table
    this.ELEMENT_DATA = data;
    this.dataSource = this.ELEMENT_DATA;
  }
}
