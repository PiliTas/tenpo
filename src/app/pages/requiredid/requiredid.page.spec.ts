import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequiredidPage } from './requiredid.page';

describe('RequiredidPage', () => {
  let component: RequiredidPage;
  let fixture: ComponentFixture<RequiredidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequiredidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
