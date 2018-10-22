import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListItemComponent } from './item-list-item.component';

describe('ItemListItemComponent', () => {
  let component: ItemListItemComponent;
  let fixture: ComponentFixture<ItemListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
