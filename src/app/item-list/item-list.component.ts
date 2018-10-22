import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Item, ItemStore } from '../../store/item.store';
import { computed } from 'mobx-angular';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent implements AfterViewInit {
  constructor(private _itemStore: ItemStore) { }

  @computed
  get items(): Array<Item> {
    return this._itemStore.items;
  }

  ngAfterViewInit() {
    console.log('List render');
  }
}
