import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPetsPage } from './add-pets.page';

describe('AddPetsPage', () => {
  let component: AddPetsPage;
  let fixture: ComponentFixture<AddPetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
