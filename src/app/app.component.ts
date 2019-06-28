import {Component, OnInit} from '@angular/core';
import {COLLECTIONS} from "./collections/collections";
import {CollectionsService} from "./services/collections.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular8demo';



  constructor(){

  }


  ngOnInit(): void {

  }



}
