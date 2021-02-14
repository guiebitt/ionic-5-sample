import { AppComponent } from './app.component';
import { I18nService } from './core/services/i18n.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let i18n: jasmine.SpyObj<I18nService>;

  beforeEach(() => {
    i18n = jasmine.createSpyObj<I18nService>(['initializeTranslate']);
    component = new AppComponent(i18n);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize translate when "ngOnInit"', () => {
    // when
    component.ngOnInit();

    // then
    expect(i18n.initializeTranslate).toHaveBeenCalledTimes(1);
  });
});
