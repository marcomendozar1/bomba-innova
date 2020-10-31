import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(private menu: MenuController, private router: ActivatedRoute, private route: Router, private auth: AuthService, public alertController: AlertController) {
    auth.isAlive().then((res) => {
      if (!res) {
        this.route.navigate(['login']);
      }
    }).catch(err => console.log('err', err));
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      //this.name = params['name'];
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  cuenta() {
    this.menu.close('first');
    this.route.navigate(['mi-perfil']);
  }
  adminUsers() {
    this.menu.close('first');
    this.route.navigate(['admin-user']);
  }
  adminBombas() {
    this.menu.close('first');
    this.route.navigate(['admin-bombas']);
  }
  listBombas() {
    this.menu.close('first');
    this.route.navigate(['control']);
  }
  logOut() {
    this.menu.close('first');
    this.auth.SignOut().then((res) => {
      this.route.navigate(['login']);
    }).catch(err => console.log('err', err));
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Creditos',
      message: 'Desarrolladores:<br>  Luis Enrique Jaimes Levario<br> Luis Antonio Manjarrez Torres<br> Vicente Sanchez Nava<br><br>Profesor:<br>  Rocio Elizabeth Pulido Alba',
      buttons: ['OK']
    });

    await alert.present();
  }
}
