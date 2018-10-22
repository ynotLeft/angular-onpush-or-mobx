import { Injectable } from '@angular/core';

import { action, computed, observable } from 'mobx-angular';

export interface Item {
  id: number;
  description: {
    timestamp: number;
    name: string;
  };
}

@Injectable()
export class ItemStore {
  @observable
  public _items: Array<Item>;

  @computed
  get items(): Array<Item> {
    return this._items;
  }

  @action
  public setItems(items: Array<Item>): void {
    this._items = items;
  }

  @action
  public setFirstItem(item: Item): void {
    // const items2 = JSON.parse(JSON.stringify(this._items));
    // items2[0] = item;
    this._items[0] = item;
  }

  @action
  test(): void {
    this._items[0].description.name = this.getRandomString();
  }

  public setItemWithSubstitute(index: number, item: Item): void {
    if (index !== -1) {
      this._items[index] = item;
    }
  }

  private getRandomString(): string {
    return Math.random().toString(36).substring(7);
  }
}
