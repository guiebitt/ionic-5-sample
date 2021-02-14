import { I18nService } from '../core/services/i18n.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let i18n: jasmine.SpyObj<I18nService>;

  beforeEach(() => {
    i18n = jasmine.createSpyObj<I18nService>(['useLanguage']);
    component = new HomePage(i18n);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language to "pt"', () => {
    // when
    component.changePtLang();

    // then
    expect(i18n.useLanguage).toHaveBeenCalledOnceWith('pt-br');
  });

  it('should change language to "en"', () => {
    // when
    component.changeEnLang();

    // then
    expect(i18n.useLanguage).toHaveBeenCalledOnceWith('en');
  });

  it('should change language to "es"', () => {
    // when
    component.changeEsLang();

    // then
    expect(i18n.useLanguage).toHaveBeenCalledOnceWith('es');
  });
});
