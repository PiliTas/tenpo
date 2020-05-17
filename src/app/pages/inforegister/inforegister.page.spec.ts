import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InforegisterPage } from './inforegister.page';

describe('InforegisterPage', () => {
  let component: InforegisterPage;
  let fixture: ComponentFixture<InforegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InforegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
