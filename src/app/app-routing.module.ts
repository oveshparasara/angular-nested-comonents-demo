import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionListComponent} from "./collection-list/collection-list.component";
import {FlashDealCollectionsListComponent} from "./flash-deal-collections-list/flash-deal-collections-list.component";

const routes: Routes = [
  {path: '', component: CollectionListComponent},
  {path: 'collections', component: CollectionListComponent},
  {path: 'flash-deals', component: FlashDealCollectionsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
