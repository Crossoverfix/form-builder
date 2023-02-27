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
import {Subject} from "rxjs";

@Component({
  selector: 'app-fb-items',
  templateUrl: './fb-items.component.html',
  styleUrls: ['./fb-items.component.scss']
})
export class FbItemsComponent implements OnInit{

  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;
  public loadedFileName: string = "";

  constructor(){

  }
  ngOnInit(){
  }
  loadConfig(event: any){
    let file = new Subject<any>;
    let reader = new FileReader();
    this.loadedFileName = event.target.files[0].name;
    reader.readAsText(event.target.files[0]);
    reader.onload = function () {
      file.next(JSON.parse(reader.result as string));
    }
    file.subscribe((jsonFile) => {
      this.updateAfterLoad(jsonFile);
    })
  }
  updateAfterLoad(file: any){
    let newGroup: any = {};
    newGroup.group = file.Title;
    newGroup.guid = file.GUID;
    newGroup.id = file.ID;
    newGroup.groupItem = file.Fields;
    for (let i = 0; i < file.Fields.length; i++){
      newGroup.groupItem[i].name = file.Fields[i].Title;
      newGroup.groupItem[i].container = false;
      newGroup.groupItem[i].icon = "icon-costume";
      newGroup.groupItem[i].template = "costume";
    }
    this.items.push(newGroup);
    console.log(this.items);
  }
  drop(event: CdkDragDrop<string[]>){
    // console.log(event);
    this.itemDragged.emit(event);
    // let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    // this.itemDragged.emit(item);
  }
}
