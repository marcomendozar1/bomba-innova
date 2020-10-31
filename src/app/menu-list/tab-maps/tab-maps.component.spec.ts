import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMapsComponent } from './tab-maps.component';

describe('TabMapsComponent', () => {
  let component: TabMapsComponent;
  let fixture: ComponentFixture<TabMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMapsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
