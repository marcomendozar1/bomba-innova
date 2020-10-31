import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabAddComponent } from './tab-add.component';

describe('TabAddComponent', () => {
  let component: TabAddComponent;
  let fixture: ComponentFixture<TabAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
