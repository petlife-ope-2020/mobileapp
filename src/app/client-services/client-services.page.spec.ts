import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ClientServicesPage } from './client-services.page';

describe('ClientServicesPage', () => {
  let component: ClientServicesPage;
  let fixture: ComponentFixture<ClientServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientServicesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
