import {Component, Input, OnInit} from '@angular/core';
import {Collection} from './collections';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  @Input() collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
