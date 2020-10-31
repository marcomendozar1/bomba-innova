import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionBombaService } from 'src/app/services/conexion-bomba.service';
import { Bomba } from 'src/app/_DAO/bomba';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-tab-update',
  templateUrl: './tab-update.component.html',
  styleUrls: ['./tab-update.component.scss'],
})
export class TabUpdateComponent implements OnInit {
  bomba: Bomba;
  items: any;
  constructor(private router: Router, public modalController: ModalController, private conexion: ConexionBombaService) {
    this.bomba = new Bomba();
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() { }

  edit(item: Bomba) {
    this.bomba = item;
    this.presentModal();
  }

  back() {
    this.router.navigate(['admin']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'bomba': this.bomba,
      }
    });
    return await modal.present();
  }

  async filterList(evt) {
    this.items = await this.conexion.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.items = this.items.filter(item => {
      const search = item.name + " " + item.direccion;
      if (search && searchTerm) {
        return (search.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
