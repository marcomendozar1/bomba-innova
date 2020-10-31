import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionBombaService } from 'src/app/services/conexion-bomba.service';
import { Bomba } from 'src/app/_DAO/bomba';
@Component({
  selector: 'app-tab-delete',
  templateUrl: './tab-delete.component.html',
  styleUrls: ['./tab-delete.component.scss'],
})
export class TabDeleteComponent implements OnInit {
  items: any;
  constructor(private router: Router, private conexion: ConexionBombaService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() { }

  eliminar(item) {
    this.conexion.deleteItem(item);
  }

  back() {
    this.router.navigate(['admin']);
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
