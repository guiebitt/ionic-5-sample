import { Component } from '@angular/core';
import { I18nService } from '../core/services/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly i18n: I18nService) {}

  changePtLang(): void {
    this.i18n.useLanguage('pt-br');
  }

  changeEnLang(): void {
    this.i18n.useLanguage('en');
  }

  changeEsLang(): void {
    this.i18n.useLanguage('es');
  }
}
