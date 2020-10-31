import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConexionUserService } from 'src/app/services/conexion-user.service'
import { UserCuenta } from 'src/app/_DAO/user-cuenta'

@Component({
  selector: 'app-tab-add',
  templateUrl: './tab-add.component.html',
  styleUrls: ['./tab-add.component.scss'],
})
export class TabAddComponent implements OnInit {
  user: UserCuenta = new UserCuenta();
  constructor(private router: Router, private conexion: ConexionUserService) {
  }

  ngOnInit() { }

  onSubmit() {
    this.conexion.addItem(this.user);
    this.user = new UserCuenta();
  }

  back() {
    this.router.navigate(['admin']);
  }
}
