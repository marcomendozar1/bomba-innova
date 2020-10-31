import { Component, OnInit, Input } from '@angular/core';
import { ConexionBombaService } from 'src/app/services/conexion-bomba.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  ModalController,
  NavParams
} from '@ionic/angular';
import { Bomba } from 'src/app/_DAO/bomba';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  bomba: Bomba;
  constructor(private conexion: ConexionBombaService, private modalController: ModalController,
    private navParams: NavParams, private geolocation: Geolocation
  ) {
    console.table(this.navParams);
    this.bomba = this.navParams.data.bomba;
    this.geoLocalizacion1();
  }

  ngOnInit() { }

  onSubmit() {
    this.conexion.updateItem(this.bomba);
    this.bomba = new Bomba();
    this.bomba.status = false;
    this.modalController.dismiss();
  }
  geoLocalizacion1() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.bomba.latitud = resp.coords.latitude
      this.bomba.longitud = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  geolocalizacion2() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.bomba.latitud = data.coords.latitude;
      this.bomba.longitud = data.coords.longitude
    });
  }
}
