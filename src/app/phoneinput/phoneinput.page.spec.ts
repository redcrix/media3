import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneinputPage } from './phoneinput.page';

describe('PhoneinputPage', () => {
  let component: PhoneinputPage;
  let fixture: ComponentFixture<PhoneinputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneinputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneinputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
