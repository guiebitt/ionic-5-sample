import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(private readonly translate: TranslateService) {}

  initializeTranslate() {
    const browserLang = this.translate.getBrowserLang();
    if (browserLang.match('pt-*') || browserLang === 'pt') {
      this.useLanguage('pt-br');
    } else if (browserLang.match('es-*') || browserLang === 'es') {
      this.useLanguage('es');
    } else {
      this.useLanguage('en');
    }
  }

  useLanguage(language: I18NLanguage): void {
    this.translate.use(language);
  }
}

export type I18NLanguage = 'pt-br' | 'en' | 'es';
