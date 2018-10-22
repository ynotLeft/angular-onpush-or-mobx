import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { ItemStore } from '../store/item.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {
  title = 'app';

  constructor(public itemStore: ItemStore, private _cd: ChangeDetectorRef) {
    const items = [];
    const items2 = [];
    for (let i = 0; i < 5000; i++) {
      items.push({ id: i, description: { name: this.getRandomString(), timestamp: new Date().getTime() } });
      items2.push({ id: i, description: { name: this.getRandomString(), timestamp: new Date().getTime() } });
    }
    this.itemStore.setItems(items);

    setInterval(() => {
      // this.itemStore.items[0].description.name = this.getRandomString();
      // this.itemStore.test();
      // this.itemStore.setFirstItem({ id: 0, description: { name: this.getRandomString(), timestamp: 0 } });
      this.itemStore._items.push({ id: 0, description: { name: this.getRandomString(), timestamp: 0 } });
    //   // this.itemStore.setItemWithSubstitute(0, { id: 0, description: { name: this.getRandomString(), timestamp: 0 } });
    //   // items[0] = { id: 0, description: { name: this.getRandomString(), timestamp: new Date().getTime() } };
    //   this.itemStore.setItems(items.slice());
    //   this._cd.markForCheck();
    }, 1000);
  }

  ngDoCheck() {
    console.log('app component doCheck');
  }

  private getRandomString(): string {
    return Math.random().toString(36).substring(7);
  }
}
