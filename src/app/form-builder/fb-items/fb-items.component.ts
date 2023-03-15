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

  @ViewChild('list', {static: true}) itemList!: ElementRef;
  @Output() itemDragged: EventEmitter<any> = new EventEmitter<any>();
  @Output() dictonaryId: EventEmitter<any> = new EventEmitter<any>();
  @Output() listOfItems: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;
  public defItems: any = {};
  public loadedFileName: string = "";
  public dictId: string = "неизвестный";

  constructor(){

  }
  ngOnInit(){
    this.defItems = this.items[0];
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
    this.dictonaryId.emit(file.ID);
    this.dictId = file.ID;
    newGroup.groupItem = [];
    for (let i = 0; i < file.Fields.length; i++){
      if (!file.Fields[i].Hidden){
        newGroup.groupItem[gi] = {};
        newGroup.groupItem[gi] = file.Fields[i];
        newGroup.groupItem[gi].name = file.Fields[i].Title;
        newGroup.groupItem[gi].container = false;
        newGroup.groupItem[gi].icon = this.iconOfType(file.Fields[i].FieldType);
        newGroup.groupItem[gi].template = "costume";
        gi++;
      }
    }
    this.items = [];
    this.items.push(this.defItems);
    this.items.push(newGroup);
    this.listOfItems.emit(this.items);
  }
  iconOfType(type: number){
    let result = "costume";
    switch(type){
      case 0: result = "icon-known";
        break;
      case 1: result = "icon-32b";
        break;
      case 2: result = "icon-64b";
        break;
      case 3: result = "icon-guid";
        break;
      case 4: result = "icon-text";
        break;
      case 5: result = "icon-note";
        break;
      case 6: result = "icon-date";
        break;
      case 7: result = "icon-lookup";
        break;
      case 8: result = "icon-m-lookup";
        break;
      case 9: result = "icon-number";
        break;
      case 10: result = "icon-binar";
        break;
      case 11: result = "icon-choice";
        break;
      case 12: result = "icon-link";
        break;
      case 13: result = "icon-attach";
        break;
      case 14: result = "icon-m-choice";
        break;
      case 15: result = "icon-f-lookup";
        break;
      case 16: result = "icon-decimal";
        break;
      case 17: result = "icon-image";
        break;
      case 18: result = "icon-access";
        break;
      case 19: result = "icon-boolean";
        break;
      case 20: result = "icon-xml";
        break;
      default: result = "icon-un-known";
    }
    return result;
  }
  drop(event: CdkDragDrop<string[]>){
    // console.log(event);
    this.itemDragged.emit(event);
    // let item = {item: this.items[i].groupItem[event.currentIndex],target: event.event.target, event: event};
    // this.itemDragged.emit(item);
  }

  toggleShowContent(index:any){
    let list = this.itemList.nativeElement;
    list.querySelectorAll('[data-toggle-index="'+index+'"]' )[0].classList.toggle("hidde");
    list.querySelectorAll('[data-content-index="'+index+'"]' )[0].classList.toggle("hidde");
  }
}
