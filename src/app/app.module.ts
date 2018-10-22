import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemStore } from '../store/item.store';
import { ListItemIconComponent } from './list-item-icon/list-item-icon.component';
import { MobxAngularModule } from 'mobx-angular';
import { ListItemOnPushComponent } from './list-item-on-push/list-item-on-push.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemListItemComponent,
    ListItemIconComponent,
    ListItemOnPushComponent,
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
  ],
  providers: [ItemStore],
  bootstrap: [AppComponent],
})
export class AppModule { }
