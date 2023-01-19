import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-fb-items',
  templateUrl: './fb-items.component.html',
  styleUrls: ['./fb-items.component.scss']
})
export class FbItemsComponent implements OnInit{

  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemDraggedTarget: EventTarget | null = null;
  @Input() items: any;

  constructor(){

  }
  ngOnInit(){

  }
  drop(event: CdkDragDrop<string[]>, i: any){
    let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target};
    this.itemDragged.emit(item);
  }
}
