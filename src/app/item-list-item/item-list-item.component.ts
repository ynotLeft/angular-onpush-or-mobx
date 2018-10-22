import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

import { Item } from '../../store/item.store';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListItemComponent implements AfterViewInit, DoCheck {
  @Input() public item: Item;

  constructor(private cd: ChangeDetectorRef) {}

  get tdate(): number {
    return new Date().getTime();
  }
  ngAfterViewInit() {
    console.log('Item render');
  }

  ngDoCheck() {
    // console.log('ItemListItemComponent component doCheck');
    this.cd.markForCheck();
  }
}
