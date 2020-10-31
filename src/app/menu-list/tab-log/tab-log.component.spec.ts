import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabLogComponent } from './tab-log.component';

describe('TabLogComponent', () => {
  let component: TabLogComponent;
  let fixture: ComponentFixture<TabLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
