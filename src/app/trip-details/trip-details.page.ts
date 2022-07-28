import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage{

  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor(private router: Router) { }

  ionViewDidEnter() {
    this.createMap();
  }

  continue() {

  }

  cancel() {
    this.router.navigate(['/map']);
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 13.7758,
          lng: 121.0455,
        },
        zoom: 19,
      },
    });
    await this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [ //add lang dine ng element sa array para magka marker or delete ung element para tagtagin marker
      {
        coordinate: {
          lat: 13.7756,
          lng: 121.0455,
        },
        title: 'localhost', //para sa modal pero di naman gagamit nun hahaha
        snippet: 'Best place on earth',
      },
      {
        coordinate: {
          lat: 13.7754,
          lng: 121.0455,
        },
        title: 'title',
        snippet: 'Not sure',
      },
    ];

    const result = await this.map.addMarkers(markers);
    console.log(result);
  }

}
