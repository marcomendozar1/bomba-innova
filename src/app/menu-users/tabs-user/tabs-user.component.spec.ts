import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsUserComponent } from './tabs-user.component';

describe('TabsUserComponent', () => {
  let component: TabsUserComponent;
  let fixture: ComponentFixture<TabsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsUserComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
