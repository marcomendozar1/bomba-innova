import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab-maps',
  templateUrl: './tab-maps.component.html',
  styleUrls: ['./tab-maps.component.scss'],
})
export class TabMapsComponent implements OnInit {
  address;
  url;
  constructor(private router: Router, private sanitizer: DomSanitizer) {

    this.address = "https://www.google.com/maps/search/19.1608763,-99.5671104,15.1z&ie=UTF8&iwloc=&output=embed";
    this.url =
      sanitizer.bypassSecurityTrustResourceUrl(this.address);
  }

  ngOnInit() { }
  back() {
    this.router.navigate(['admin']);
  }
}
