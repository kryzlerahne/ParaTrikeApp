//import { Component, OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
declare const google;

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.page.html',
  styleUrls: ['./map-home.page.scss'],
})
export class MapHomePage implements AfterViewInit {

  sourceLocation = '';
  destinationLocation = '';
  @ViewChild('mapElement', {static: false}) mapElement;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  constructor() { }

  ngAfterViewInit(): void {
    this.loadMapWithDirection();
  }

  loadMapWithDirection() {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
    zoom: 19,
    center: {lat:13.7758, lng: 121.0455},
  });
  this.directionsRenderer.setMap(map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route(
      {
        origin: {
          query: this.sourceLocation,
        },
        destination: {
          query: this.destinationLocation,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }

}
