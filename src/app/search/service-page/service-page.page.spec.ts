import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicePagePage } from './service-page.page';

describe('ServicePagePage', () => {
  let component: ServicePagePage;
  let fixture: ComponentFixture<ServicePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
