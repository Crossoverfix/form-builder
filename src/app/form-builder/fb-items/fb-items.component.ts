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
import {group} from "@angular/animations";

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
    let gi = 0;
    newGroup.group = file.Title;
    newGroup.guid = file.GUID;
    newGroup.id = file.ID;
    newGroup.groupItem = [];
    // newGroup.groupItem = file.Fields;
    for (let i = 0; i < file.Fields.length; i++){
      if (!file.Fields[i].Hidden){
        newGroup.groupItem[gi] = {};
        newGroup.groupItem[gi] = file.Fields[i];
        newGroup.groupItem[gi].name = file.Fields[i].Title;
        newGroup.groupItem[gi].container = false;
        newGroup.groupItem[gi].icon = this.iconOfType(file.Fields[i].FieldType);
        newGroup.groupItem[gi].template = "costume";
        console.log(newGroup.groupItem[gi]);
        gi++;
      }
    }
    this.items.push(newGroup);
    console.log(this.items);
  }
  iconOfType(type: number){
    let result = "costume";
    switch(type){
      case 0: result = "costume-1";
        break;
      case 1: result = "costume-1";
        break;
      case 2: result = "costume-3";
        break;
      case 3: result = "costume-4";
        break;
      case 4: result = "icon-text";
        break;
      case 5: result = "icon-text";
        break;
      case 6: result = "costume-7";
        break;
      case 7: result = "icon-select";
        break;
      case 8: result = "icon-select";
        break;
      case 9: result = "icon-number";
        break;
      case 10: result = "costume-11";
        break;
      case 11: result = "icon-select";
        break;
      case 12: result = "costume-13";
        break;
      case 13: result = "costume-14";
        break;
      case 14: result = "icon-select";
        break;
      case 15: result = "icon-select";
        break;
      case 16: result = "costume-17";
        break;
      case 17: result = "costume-18";
        break;
      case 18: result = "costume-19";
        break;
      case 19: result = "costume-20";
        break;
      case 20: result = "costume-21";
        break;
      default: result = "out-of-range";
    }
    return result;
  }
  drop(event: CdkDragDrop<string[]>){
    // console.log(event);
    this.itemDragged.emit(event);
    // let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    // this.itemDragged.emit(item);
  }
}
