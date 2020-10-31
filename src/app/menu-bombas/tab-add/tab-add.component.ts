import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConexionBombaService } from 'src/app/services/conexion-bomba.service';
import { Bomba } from 'src/app/_DAO/bomba';
@Component({
  selector: 'app-tab-add',
  templateUrl: './tab-add.component.html',
  styleUrls: ['./tab-add.component.scss'],
})
export class TabAddComponent implements OnInit {
  bomba: Bomba;

  constructor(private router: Router, private conexion: ConexionBombaService, private geolocation: Geolocation) {
    this.bomba = new Bomba();
    this.bomba.status = false;
    this.geoLocalizacion1();
  }

  ngOnInit() { }

  onSubmit() {
    this.conexion.addItem(this.bomba);
    this.bomba = new Bomba();
    this.bomba.status = false;
  }
  back() {
    this.router.navigate(['admin']);
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
