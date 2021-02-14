import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;
  let translate: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    translate = jasmine.createSpyObj<TranslateService>([
      'getBrowserLang',
      'use',
    ]);
    service = new I18nService(translate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize translate when browser language is "pt-BR"', () => {
    // given
    translate.getBrowserLang.and.returnValue('pt-BR');

    // when
    service.initializeTranslate();

    // then
    expect(translate.use).toHaveBeenCalledOnceWith('pt-br');
  });

  it('should initialize translate when browser language is "en-US"', () => {
    // given
    translate.getBrowserLang.and.returnValue('en-US');

    // when
    service.initializeTranslate();

    // then
    expect(translate.use).toHaveBeenCalledOnceWith('en');
  });

  it('should initialize translate when browser language is "es"', () => {
    // given
    translate.getBrowserLang.and.returnValue('es');

    // when
    service.initializeTranslate();

    // then
    expect(translate.use).toHaveBeenCalledOnceWith('es');
  });

  it('should initialize translate when browser language is other language', () => {
    // given
    translate.getBrowserLang.and.returnValue('fr');

    // when
    service.initializeTranslate();

    // then
    expect(translate.use).toHaveBeenCalledOnceWith('en');
  });
});
