import { Component, OnInit } from '@angular/core';
import { ConexionUserService } from 'src/app/services/conexion-user.service';
import { UserCuenta } from 'src/app/_DAO/user-cuenta';
import { PhotoService } from '../services/photo.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {
  items: any;
  user: UserCuenta = new UserCuenta();
  constructor(private conexion: ConexionUserService, public photoService: PhotoService, private storage: AngularFireStorage) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
    this.filterList("detster77@gmail.com");
  }

  ngOnInit() { }

  onSubmit() {
    this.conexion.updateItem(this.user);
    this.user = new UserCuenta();
  }

  async filterList(email) {
    this.items = await this.conexion.initializeItems();
    const searchTerm = email;
    if (!searchTerm) {
      return;
    }

    this.items = this.items.filter(item => {
      const search = item.email;
      if (search && searchTerm) {
        return (search.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
    this.user = this.items[0];
  }
}
