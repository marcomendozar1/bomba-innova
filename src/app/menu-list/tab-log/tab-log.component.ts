import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionLogService } from 'src/app/services/conexion-log.service';

@Component({
  selector: 'app-tab-log',
  templateUrl: './tab-log.component.html',
  styleUrls: ['./tab-log.component.scss'],
})
export class TabLogComponent implements OnInit {
  items: any;
  constructor(private router: Router, private conexion: ConexionLogService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() { }

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
      const search = item.username + " " + item.bomba + " " + item.fecha + " " + item.hora;
      if (search && searchTerm) {
        return (search.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
