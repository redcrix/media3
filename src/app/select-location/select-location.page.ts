import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { Platform } from "@ionic/angular";
@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})


export class SelectLocationPage implements OnInit {

  // @ViewChild('map', {}) mapElement: ElementRef;
  // map: any;
  // start = 'chicago, il';
  // end = 'chicago, il';
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(
    private navCtrl: NavController,
    public platform: Platform
  ) { }

  ngAfterViewInit() {
		this.platform.ready().then(() => this.loadMap());
	}


  ngOnInit() {
  }
  

  SaveAndContinue(){
    this.navCtrl.navigateForward('upload-photos');
  }

  loadMap() {
    const map = GoogleMaps.create('map');

		map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(41, -87);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(8);
		});
  }

}
