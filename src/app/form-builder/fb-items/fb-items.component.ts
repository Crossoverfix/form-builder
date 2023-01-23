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
export class FbItemsComponent implements OnInit{

  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;

  constructor(){

  }
  ngOnInit(){
  }
  drop(event: CdkDragDrop<string[]>){
    // console.log(event);
    this.itemDragged.emit(event);
    // let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    // this.itemDragged.emit(item);
  }
}
