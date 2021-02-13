import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly translate: TranslateService) {}

  changePtLang() {
    this.translate.use('pt-br');
  }

  changeEnLang() {
    this.translate.use('en');
  }

  changeEsLang() {
    this.translate.use('es');
  }
}
