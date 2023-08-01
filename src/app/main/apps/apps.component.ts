import { Component, OnInit } from '@angular/core';
import { CoreConfigService } from '../../../@core/services/config.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor(private _coreConfigService: CoreConfigService) {
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        menu: {
          hidden: false
        },
        footer: {
          hidden: false
        },
        customizer: false
      }
    };
  }

  ngOnInit(): void {
  }

}
