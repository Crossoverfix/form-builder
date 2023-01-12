import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-fb-items',
  templateUrl: './fb-items.component.html',
  styleUrls: ['./fb-items.component.scss']
})
export class FbItemsComponent implements OnInit{

  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Output() endOfDrag: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;

  ngOnInit(){

  }

  dragStart(item: any) {
    this.itemDragged.emit(item);
  }
  dragEnd(){
    this.endOfDrag.emit(true);
  }
}
