import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionUserService } from 'src/app/services/conexion-user.service';

@Component({
  selector: 'app-tab-delete',
  templateUrl: './tab-delete.component.html',
  styleUrls: ['./tab-delete.component.scss'],
})
export class TabDeleteComponent implements OnInit {
  items: any;
  constructor(private router: Router, private conexion: ConexionUserService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() { }

  search() {
    console.log("vas")
  }

  eliminar(item) {
    this.conexion.deleteItem(item);
  }
  back() {
    this.router.navigate(['admin']);
  }
}
