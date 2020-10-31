import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsBombaComponent } from './tabs-bomba.component';

describe('TabsBombaComponent', () => {
  let component: TabsBombaComponent;
  let fixture: ComponentFixture<TabsBombaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsBombaComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsBombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
