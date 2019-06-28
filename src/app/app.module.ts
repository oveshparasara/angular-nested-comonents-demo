import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CollectionsService} from "./services/collections.service";
import { FlashDealCollectionsListComponent } from './flash-deal-collections-list/flash-deal-collections-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionListComponent,
    FlashDealCollectionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
