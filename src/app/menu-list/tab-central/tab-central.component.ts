import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionBombaService } from 'src/app/services/conexion-bomba.service';
import { ConexionLogService } from 'src/app/services/conexion-log.service';
import { Log } from 'src/app/_DAO/log';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab-central',
  templateUrl: './tab-central.component.html',
  styleUrls: ['./tab-central.component.scss'],
})
export class TabCentralComponent implements OnInit {
  log: Log;
  items: any[];
  myDate = new Date();
  constructor(private router: Router, private conexion: ConexionBombaService, private conexionLog: ConexionLogService, private datePipe: DatePipe, public toastController: ToastController) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() { }

  status(item) {
    this.log = new Log();
    this.log.username = "Luis Antonio";
    this.log.bomba = item.name;
    this.log.fecha = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.log.hora = this.datePipe.transform(this.myDate, 'h:mm a');
    console.log(item);
    if (!item.status) {
      item.status = true;
      this.log.msg = "Bomba Encendida";
      this.presentToast("Bomba Encendida");
    } else {
      item.status = false;
      this.log.msg = "Bomba Apagada";
      this.presentToast("Bomba Apagada");
    }
    this.conexionLog.addItem(this.log);
    this.conexion.updateItem(item);
  }
  back() {
    this.router.navigate(['admin']);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async filterList(evt) {
    this.items = await this.conexion.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.items = this.items.filter(item => {
      if (item.name && searchTerm) {
        return (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
