import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCentralComponent } from './tab-central.component';

describe('TabCentralComponent', () => {
  let component: TabCentralComponent;
  let fixture: ComponentFixture<TabCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCentralComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
