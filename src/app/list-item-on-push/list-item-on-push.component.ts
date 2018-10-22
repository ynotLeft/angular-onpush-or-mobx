import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

import { Item } from '../../store/item.store';

@Component({
  selector: 'app-list-item-on-push',
  templateUrl: './list-item-on-push.component.html',
  styleUrls: ['./list-item-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemOnPushComponent implements DoCheck {
  @Input() items: Array<Item> = [];
  constructor(private cd: ChangeDetectorRef) {
    // setInterval(() => {
      // this.items[0].description.name = this.getRandomString();
      // this.itemStore.test();
      // this.itemStore.setFirstItem({ id: 0, description: { name: this.getRandomString(), timestamp: 0 } });
      // this.items[0] = { id: 0, description: { name: this.getRandomString(), timestamp: 0 } };
      // items[0] = { id: 0, description: { name: this.getRandomString(), timestamp: new Date().getTime() } };
      // this.itemStore.setItems(items);
      // this.cd.markForCheck();
    // }, 1000);
  }

  itemsFunction(item: Item) {
    return item.id;
  }

  ngDoCheck() {
    console.log('ListItemOnPushComponent component doCheck');
    this.cd.markForCheck();
  }

  private getRandomString(): string {
    return Math.random().toString(36).substring(7);
  }
}
