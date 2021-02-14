import { Component, OnInit } from '@angular/core';
import { I18nService } from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.initializeTranslate();
  }
}
