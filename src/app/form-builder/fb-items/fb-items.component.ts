import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  drop(event: CdkDragDrop<string[]>, i: any){
    console.log(event);
    console.log(event.event.target);
    console.log(this.items[i].groupItem[event.currentIndex]);
    // this.itemDragged = {event.event.target, this.items[i].groupItem[event.currentIndex]}
  }
}
