import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {
    this.initializeTranslate();
  }

  private initializeTranslate() {
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    if (browserLang.match('pt-*') || browserLang === 'pt') {
      this.translate.use('pt-br');
    } else if (browserLang.match('es-*') || browserLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }
}
