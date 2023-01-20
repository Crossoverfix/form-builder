import {
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-fb-items',
  templateUrl: './fb-items.component.html',
  styleUrls: ['./fb-items.component.scss']
})
export class FbItemsComponent implements OnInit, AfterViewInit{

  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Output() sdkArrId: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;
  @Input('cdk-drop-list') currId: any;
  @ViewChildren('itemList') container!: QueryList<ElementRef>;

  constructor(){

  }
  ngOnInit(){
  }
  ngAfterViewInit(){
    this.sdkArrId.emit(this.container);
    console.log(this.container);

  }
  drop(event: CdkDragDrop<string[]>, i: any){
    let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    this.itemDragged.emit(item);
  }
  drop2(event: CdkDragDrop<string[]>, i: any){
    console.log('te');
    let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    this.itemDragged.emit(item);
    console.log(item);
  }
}
