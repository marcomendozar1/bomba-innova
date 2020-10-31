import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionUserService } from 'src/app/services/conexion-user.service';
import { UserCuenta } from 'src/app/_DAO/user-cuenta'

@Component({
  selector: 'app-tab-update',
  templateUrl: './tab-update.component.html',
  styleUrls: ['./tab-update.component.scss'],
})
export class TabUpdateComponent implements OnInit {

  items: any;
  constructor(private router: Router, private conexion: ConexionUserService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }


  ngOnInit() { }

  actualizar(item) {
    this.conexion.updateItem(item);
  }
  back() {
    this.router.navigate(['admin']);
  }
}
