import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostComponentComponent } from './http-post-component.component';

describe('HttpPostComponentComponent', () => {
  let component: HttpPostComponentComponent;
  let fixture: ComponentFixture<HttpPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
