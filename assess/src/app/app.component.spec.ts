import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SiteHeaderComponent} from "./components/site-header/site-header.component";
import {SiteFooterComponent} from "./components/site-footer/site-footer.component";
import {RouterTestingModule} from '@angular/router/testing'
import {NaviComponent} from "./components/navi/navi.component";
import {WorkFlowService} from "./services/work-flow.service";
import {LocalStorageService} from "./services/local-storage.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        NaviComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        WorkFlowService,
        LocalStorageService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cloud Assessment Tool beta');
  }));
});
