import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  rides: any[] = [
    {id: 1, validation: 'Driver Machu #0169', refCode: '0000012', amount: 40.00, date: 'July 28, 2022',time: '3:00PM'},
    {id: 2, validation: 'Driver Sins #0125', refCode: '0000013', amount: 120.00,  date:' July 27, 2022', time: '9:00AM'},
    {id: 3, validation: 'Cancelled', refCode: '0000014', amount: -15.00,  date: 'July 25, 2022', time: '7:30AM'},
  ];

  lastRides: any[] = [
    {id: 1, validation: 'Cancelled', refCode: '0000015', amount: -15.00, date: 'June 30, 2022',time: '5:00PM'},
    {id: 2, validation: 'Driver Felip #0143', refCode: '0000016', amount: 80.00,  date:' June 21, 2022', time: '11:00AM'},
    {id: 3, validation: 'Cancelled', refCode: '0000017', amount: -15.00,  date:' June 17, 2022', time: '8:00PM'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
