import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor(private router: Router) { }

  tripDetails() {
    this.router.navigate(['/trip-details']);
    this.modal.dismiss();
  }

  ionViewDidEnter() {
    this.createMap();
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
