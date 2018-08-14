import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceComponentComponent } from './my-service-component.component';

describe('MyServiceComponentComponent', () => {
  let component: MyServiceComponentComponent;
  let fixture: ComponentFixture<MyServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
