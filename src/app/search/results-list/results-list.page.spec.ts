import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsListPage } from './results-list.page';

describe('ResultsListPage', () => {
  let component: ResultsListPage;
  let fixture: ComponentFixture<ResultsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
