import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActiveJobsPage } from './active-jobs.page';

describe('ActiveJobsPage', () => {
  let component: ActiveJobsPage;
  let fixture: ComponentFixture<ActiveJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveJobsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
