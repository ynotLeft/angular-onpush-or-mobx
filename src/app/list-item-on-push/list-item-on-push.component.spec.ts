import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemOnPushComponent } from './list-item-on-push.component';

describe('ListItemOnPushComponent', () => {
  let component: ListItemOnPushComponent;
  let fixture: ComponentFixture<ListItemOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
